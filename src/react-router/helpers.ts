import React from 'react';

export const compilePath = (path: string) => {
  const keys: string[] = [];

  path = path.replace(/:(\w+)/g, (_, key) => {
    keys.push(key);
    return '([^\\/]+)';
  });

  const source = `^(${path})`;

  const regex = new RegExp(source, 'i');
  return { regex, keys };
};

export const matchRoutes = (children: React.ReactNode, location: string) => {
  const matches: any[] = [];

  React.Children.forEach(children, (route) => {
    const { regex, keys } = compilePath(
      (route as React.ReactElement).props.path
    );

    const match = location.match(regex);

    if (match) {
      const params = match.slice(2);
      matches.push({
        route: (route as React.ReactElement).props.children,
        params: keys.reduce((collection, key, index) => {
          (collection as any)[key] = params[index];
          return collection;
        }, {}),
      });
    }
  });

  return matches[0];
};
