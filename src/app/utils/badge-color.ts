import { getTheme } from 'office-ui-fabric-react';

export function getStyleFor (method: string) {
  const currentTheme = getTheme();
  method = method.toUpperCase();

  switch (method) {
    case 'GET':
      return currentTheme.palette.blue;

    case 'POST':
      return currentTheme.palette.green;

    case 'PUT':
      return currentTheme.palette.magentaDark;

    case 'PATCH':
      return currentTheme.palette.yellowDark;

    case 'DELETE':
      return currentTheme.palette.redDark;

    default:
      return currentTheme.palette.orangeLight;
  }
}
