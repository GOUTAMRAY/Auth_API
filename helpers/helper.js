
/****
 * 
 * create a random id 
 */

// Function to generate a random unique string ID

export const getRandomUniqueID = (length = 26) => {
  const alphanumericChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const idLength = 10; // You can adjust the length of the generated ID as needed
  let randomID = '';

  // Generate a random ID
  for (let i = 0; i < idLength; i++) {
    randomID += alphanumericChars.charAt(Math.floor(Math.random() * alphanumericChars.length));
  }

  // Append a timestamp to ensure uniqueness
  const timestamp = new Date().getTime().toString();

  // Combine the random ID and the timestamp to form the final unique ID
  const uniqueID = `${randomID}-${timestamp}`;

  return uniqueID;
}

/***
 * 
 * create slug 
 */

 export const createProductSlug = (name)=> {
  // Convert the name to lowercase and replace spaces with dashes
  let slug = name.toLowerCase().replace(/\s+/g, '-');

  // Remove special characters
  slug = slug.replace(/[^\w\-]+/g, '');

  return slug;
}






