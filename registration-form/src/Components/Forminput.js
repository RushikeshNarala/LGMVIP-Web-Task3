import React, { useState } from 'react'
import Display from './Display';

export default function Forminput() {

    // state array which holds the objects
    const [inputarr, setinputarr] = useState([]);

    // state object which is holds the student properties
    const [input, setinput] = useState({ name: '', mail: '', website: '', link: '', gender: '', skills: [] });

    // function handleChange(e) {
    //     if (e.target.checked) {
    //         setAllChecked([...allchecked, e.target.value]);
    //         setinput({...input}, [e.target.name]: e.target.value)
    //     } else {
    //         setAllChecked(allchecked.filter((item) => item !== e.target.value));
    //     }
    // }


    const changeHandle = e => {
        if (e.target.name === 'skills') {
            let data = input.skills.push(e.target.value);
            setinput({ ...input, [skills]: data })
        } else {
            setinput({ ...input, [e.target.name]: e.target.value })
        }

    }

    let { name, mail, website, link, gender, skills } = input;

    const onSubmitg = (e) => {
        e.preventDefault();

        setinputarr([...inputarr, { name, mail, website, link, gender, skills }])
        console.log(input)
        const updatedinput = { name: '', mail: '', website: '', link: '', gender: '', skills: [] };

        setinput(updatedinput);
        console.log(1, inputarr)

    }


    return (
        <div className='input-container'>
            <div>
                <form onSubmit={onSubmitg} className='form'>
                    <table>
                        <tr><td colSpan='2'> Name       </td><td ><input type='text' placeholder='Name' onChange={changeHandle} value={input.name} name='name' />         <br /></td></tr>
                        <tr><td colSpan='2'> Email      </td><td ><input type='text' placeholder='mail' onChange={changeHandle} value={input.mail} name='mail' />         <br /></td></tr>
                        <tr><td colSpan='2'> Website    </td><td ><input type='text' placeholder='website' onChange={changeHandle} value={input.website} name='website' /> <br /></td></tr>
                        <tr><td colSpan='2'> Image link </td><td ><input type='text' placeholder='link' onChange={changeHandle} value={input.link} name='link' />         <br /></td></tr>
                        <tr><td colSpan='2'> Gender     </td><td ><input type='radio' value="male" onChange={changeHandle} name='gender' checked={input.gender === "male"} />Male
                            <input type='radio' value="female" onChange={changeHandle} name='gender' checked={input.gender === "female"} />Female      <br /></td></tr>
                        <tr><td colSpan='2'> Skills      </td><td><input type='checkbox' value="java" onChange={changeHandle} name='skills' />Java
                            <input type='checkbox' value="html" onChange={changeHandle} name='skills' />HTML
                            <input type='checkbox' value="css" onChange={changeHandle} name='skills' />CSS<br /></td></tr>

                    </table>
                    <button type='submit' value='Enroll'>Enroll Student</button>
                    <button type='Reset' value='Reset'>Clear</button>
                </form>
            </div>
            <div>
                <Display inputarr={inputarr}></Display>
            </div>
        </div>
    )
}
<td></td>


