import React, { useState } from 'react'

export default function ToDoList1() {
    let [array, setArray] = useState([])
    let [inputdata, setInputdata] = useState({ name: "", email: "", location: "", number: "" })
    let [index, setIndex] = useState()
    let [bolin, setBolin] = useState(false)
    let { name, email, location, number } = inputdata;

    function data(e) {
        setInputdata({ ...inputdata, [e.target.name]: e.target.value })
    }

    function addinputdata() {
        if (name === "" && number === "" && email === "" && location === "") {
            alert("Enter Your Details")
        }
        else {
            setArray([...array, { name, email, location, number }])
            // console.log(inputdata)
            setInputdata({ name: "", email: "", location: "", number: "" })
        }
    }
    // deleting row 
    function deletedata(i) {
        console.log(i, "this index row want to be delete")
        let total = [...array]
        total.splice(i, 1)
        setArray(total)
    }
    // updatedata
    function updatedata(i) {
        let { name, email, location, number } = array[i]//this perticular index no row data shoud be update so we get this index no row data in name or number 
        setInputdata({ name, email, location, number })
        setBolin(true)
        setIndex(i)
    }
    //know add data at perticular index means update it on that index
    function updateinfo() {
        let total = [...array]
        total.splice(index, 1, { name, email, location, number })
        setArray(total)
        setBolin(false)
        setInputdata({ name: "", email: "", location: "", number: "" })
    }
    return (
        <div className='bg-slate-200'>
            <div className='flex justify-center'>
                <div className=' m-5'>
                    <p className='text-lg font-semibold '>Enter Your Name</p>
                    <input className='border p-3 block mb-5' type="text" value={inputdata.name || ""} name='name' autoComplete='off' placeholder='Enter Name' onChange={data} />
                    <p className='text-lg font-semibold'>Enter Your Name</p>
                    <input className='border p-3 block mb-5' type="email" value={inputdata.email || ""} name='email' autoComplete='off' placeholder='Enter E-mail' onChange={data} />
                    <p className='text-lg font-semibold'>Select Country</p>
                    <select name="location" id="" className='block p-2 rounded-md mb-5' onChange={data}>
                        <option value={"Select"}>Select Country</option>
                        <option value={"India"}>India</option>
                        <option value={"UK"}>UK</option>
                        <option value={"USA"}>USA</option>
                        <option value={"China"}>China</option>
                        <option value={"Aus"}>Australia</option>
                    </select>
                    <p className='text-lg font-semibold'>Enter Number</p>
                    <input className='border p-3 block mb-5' type="number" value={inputdata.number || ""} name="number" placeholder='Enter Number' onChange={data} />
                    <button className='border p-3 block bg-blue-500 rounded-md text-white font-semibold' onClick={!bolin ? addinputdata : updateinfo}>{!bolin ? `Add data` : `Update data`}</button>
                </div>
            </div>
            <br />
            <table border="1" className='w-full p-2 border'>
                <tbody>
                    <tr className='h-10 border-2 border-black text-left'>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Location</th>
                        <th>Number</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    {
                        array && array.map(
                            (item, i) => {
                                return (
                                    <tr key={i} className='border-black border'>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.location}</td>
                                        <td>{item.number}</td>
                                        <td><button className='border px-5 py-1 bg-blue-500 rounded-md text-white' onClick={() => updatedata(i)}>Update</button></td>
                                        <td><button className='border px-5 py-1 bg-red-600 rounded-md text-white' onClick={() => deletedata(i)}>Delete</button></td>
                                    </tr>
                                )
                            }
                        )

                    }
                </tbody>
                
            </table>
        </div>
    )
}
