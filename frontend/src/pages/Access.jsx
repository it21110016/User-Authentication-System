const Access = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-half">
        <h2 className="text-2xl font-bold text-center mb-4">Access Denied</h2>
        <p className="text-center">You do not have permission to access this page.</p>
        <p className="text-center mt-2">Please login with an account that has the appropriate permissions.</p>
        <div className="mt-4 text-center">
          <a href="/login" className="text-blue-500 hover:underline">Login</a>
        </div>
      </div>
    </div>
  );
}

export default Access;