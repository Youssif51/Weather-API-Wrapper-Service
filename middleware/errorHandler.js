const errorHandler = (err, req, res, next) => {
    console.error("Error Middleware:", err.message);
  
    // لو الخطأ يحتوي على `status` بنستخدمه، وإلا بنرجع 500
    const statusCode = err.status || 500;
    const message = err.message || "An unexpected error occurred. Please try again later.";
  
    // رد الخطأ
    return res.status(statusCode).json({ error: message });
  };
  
  module.exports = errorHandler;
  