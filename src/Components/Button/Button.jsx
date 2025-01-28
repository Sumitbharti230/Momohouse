import { GoArrowRight } from "react-icons/go";

function Button({ title, color }) {
    return (
        <div>
            <button

                style={{

                    backgroundColor: { color }

                }}


                className="bg-green-900 hover:bg-green-800 p-4
             flex items-center gap-x-2 text-white rounded-full">
                {title}
                <GoArrowRight size={20} />
            </button>

        </div>
    )
}

export default Button
