export const formattedDate =(unfromattedDate) => {
 let date = new Date(unfromattedDate).toLocaleDateString("en-us",{
    year:"numeric",
    month:"long",
    day:"numeric",
  })
  return date
}