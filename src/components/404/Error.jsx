import React from 'react'
import { Link } from "react-router-dom";
import { Ghost } from "lucide-react";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <Ghost className="w-20 h-20 text-gray-600" />
      <h1 className="text-5xl font-bold text-gray-800 mt-4">404</h1>
      <p className="text-lg text-gray-600 mt-2">Oops! The page you are looking for does not exist.</p>
      <Link to="/">
      </Link>
    </div>
  )
}

export default Error