export class ApiError extends Error {
    public message: string;
    public error: string;

    constructor(message: string, error: string) {
        super(message);
        this.name = 'ApiError';
        this.message = message;
        this.error = error;
    }
}
