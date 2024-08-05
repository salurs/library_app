interface SuccessResponse<T> {
    status: boolean;
    message: string;
    data: T;
  }
  
  interface ErrorResponse<T = null> {
    status: boolean;
    message: string;
    error: T;
  }
  
  export const successResponse = <T>(data: T, message: string = 'Success'): SuccessResponse<T> => ({
    status: true,
    message,
    data,
  });
  
  export const errorResponse = <T>(error: T, message: string = 'Error'): ErrorResponse<T> => ({
    status: false,
    message,
    error,
  });
  