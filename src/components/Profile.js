const ProfileTemplate = () => {
  return (
    <>
      <div className="flex items-center mx-2">
        <span class="material-symbols-outlined mx-4">mark_email_unread</span>
        <hr className="text-gray-500" />
        <span>
          <img
            src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg"
            alt="Profile Picture"
            class="w-12 h-12 rounded-full object-cover"
          />
        </span>
        <div className="flex items-center">
          <div>
            <h1 class="text-md text-start font-bold">Yagash</h1>
            <h1 class="text-sm  text-start text-grey-200">
              Full Stack Developer
            </h1>
          </div>
          <span class="material-symbols-outlined">arrow_drop_down</span>
        </div>
      </div>
    </>
  );
};

export default ProfileTemplate;
