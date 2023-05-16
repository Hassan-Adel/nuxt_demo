export default defineEventHandler((event) => {
    const { serverName } = useRuntimeConfig();
    return `Hello, ${event.context.params?.name} from ${serverName}!`;
})
