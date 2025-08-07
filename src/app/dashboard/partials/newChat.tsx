'use client';

const NewChat = () => {
    const handleClick = () => {
        window.alert('Feature unlock soon');
    };

    return (
        <button onClick={handleClick} className="lg:w-auto w-full bg-gradient-to-r font-semibold from-[#A07DF1] to-[#F69DBA] text-white px-4 py-2 rounded-sm lg:hover:shadow-lg transition-all duration-300 text-sm">
            NewChat
        </button>
    );
};

export default NewChat;