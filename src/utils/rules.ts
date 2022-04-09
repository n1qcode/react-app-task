


export const rules = {
    required: (message: string) => ({
        required: true,
        message
    }),
    min: (message: string) => ({
        min: 8,
        message
    })
}
