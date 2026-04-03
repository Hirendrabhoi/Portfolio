import React from 'react'

const Inputfield = ({ name, value, type = "text", label, required = false,rows,onchange }) => {
    return (
        <div className='relative w-full '>

            {type !== "textarea" && (
                <div>
                    <input
                        type={type}
                        name={name}
                        value={value}
                        placeholder=" "
                        required={required}
                        onChange={onchange}
                        className='peer w-full px-4 py-3 bg-transparent 
        border border-gray-600 rounded-md text-white
        focus:outline-none focus:border-yellow-400
        transition-all duration-300'
                    />

                    <label
                        className='absolute left-3 top-3 text-gray-400 text-sm 
        transition-all duration-200 
        peer-placeholder-shown:top-3 
        peer-placeholder-shown:text-base 
        peer-placeholder-shown:text-gray-400

        peer-not-placeholder-shown:-top-2
        peer-not-placeholder-shown:text-xs

        peer-focus:-top-2 
        peer-focus:text-xs 
        peer-focus:text-yellow-400

        bg-[#0F172A] px-1'
                    >
                        {label}
                    </label>
                </div>
            )}
            {type === "textarea" && (
                <div>
                    <textarea
                        type={type}
                        name={name}
                        value={value}
                        rows= {rows}
                        onChange={onchange}
                        placeholder=" "
                        required={required}
                        className='peer w-full px-4 py-3 bg-transparent 
        border border-gray-600 rounded-md text-white
        focus:outline-none focus:border-yellow-400
        transition-all duration-300'
                    />

                    <label
                        className='absolute left-3 top-3 text-gray-400 text-sm 
        transition-all duration-200 
        peer-placeholder-shown:top-3 
        peer-placeholder-shown:text-base 
        peer-placeholder-shown:text-gray-400

        peer-not-placeholder-shown:-top-2
        peer-not-placeholder-shown:text-xs

        peer-focus:-top-2 
        peer-focus:text-xs 
        peer-focus:text-yellow-400

        bg-[#0F172A] px-1'
                    >
                        {label}
                    </label>
                </div>
            )}

        </div>
    )
}

export default Inputfield