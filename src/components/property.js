export const Property = ({ src }) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md">
      <img src={src} alt="Property" className="object-cover w-full h-36" />
      <div className="p-2">
        <h1 className="mb-2 text-xl font-semibold text-start">
          Elite Hotel Property
        </h1>
        <h2 className="flex items-center mb-4 text-sm text-gray-600">
          <span className="mr-1 material-symbols-outlined">location_on</span>
          Heights, Dime
        </h2>
        <div className="flex items-center justify-between text-gray-900">
          <span className="text-lg font-bold">$3000</span>
          <a href="#" className="flex items-center text-blue-500">
            Edit Property
            <span className="ml-1 material-symbols-outlined">
              arrow_forward_ios
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
