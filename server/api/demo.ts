export default defineEventHandler(async (event) => {

      //get env variables
      const { serverName } = useRuntimeConfig();

      //handle query params
      const { name } = getQuery(event)
  
      //handle post data
      const { age } = await readBody(event)
    
      return {
        message: `Hello, ${name}! You are ${age} years old, message from ${serverName}.`
      }  
})