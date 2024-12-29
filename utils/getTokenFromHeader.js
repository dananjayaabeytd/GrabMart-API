export const getTokenFromHeader = req => {
  //get token from header
  const headerObj = req.headers.authorization;

  //split the token
  const token = headerObj.split(' ')[1];

  if (token === undefined) {
    return 'No token found in the header';
  } else {
    return token;
  }
};
