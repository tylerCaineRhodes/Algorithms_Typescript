 export const floodFill = (image: number[][], sr: number, sc: number, newColor: number): number[][] => {
  if (image[sr][sc] === newColor) return image;

  let oldColor = image[sr][sc];

  const changeColor = (sr: number, sc: number): void => {
    //change color of current if equals old color
    if (image[sr][sc] === oldColor) image[sr][sc] = newColor;

    //check left of coordinate
    if (sc >= 1 && image[sr][sc - 1] === oldColor) {
      image[sr][sc - 1] = newColor;
      changeColor(sr, sc - 1);
    }
    //check below of coordinate
    if (sr < image.length - 1 && image[sr + 1][sc] === oldColor) {
      image[sr + 1][sc] = newColor;
      changeColor(sr + 1, sc);
    }
    //check right of coordinate
    if (sc < image[sr].length - 1 && image[sr][sc + 1] === oldColor) {
      image[sr][sc + 1] = newColor;
      changeColor(sr, sc + 1);
    }
    //check above coordinate
    if (sr >= 1 && image[sr - 1][sc] === oldColor) {
      image[sr - 1][sc] = newColor;
      changeColor(sr - 1, sc);
    }
  };
  changeColor(sr, sc);
  return image;
};
