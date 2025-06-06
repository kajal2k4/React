import React, { useState } from "react";

export default function FoodReview() {
  const [data, setData] = useState({});
  function hc(e) {
    const{name,value}=e.target
    setData({...data,[name]:value});
  }

  function hs(e){
    e.preventDefault()
    alert(
        `You entered:
        \n ${data.name}
        \n ${data.num} 
        \n ${data.email}
        `
    )
  }

  return (
    <>
      <form method="get" action="ok.jpg" target="_blank" onSubmit={hs}>
        <fieldset>
          <legend>Customer Detail</legend>
          <table>
            <tbody>
              <tr>
                <th>Name:</th>
                <td>
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    maxlength="10" name="name" onChange={hc}
                  />
                </td>
              </tr>

              <tr>
                <th>Number:</th>
                <td>
                  <input
                    type="tel"
                    placeholder="Enter your Number"
                    maxlength="10" name="num" onChange={hc}
                  />
                </td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>
                  <input type="email" placeholder="Enter your Email" name="email" onChange={hc}/>
                </td>
              </tr>
              <tr>
                <th>Pizza Name:</th>
                <td>
                  <input type="checkbox" placeholder="Enter your Email" name="pizzaname" onChange={hc}/>
                  Simple. veg <br />
                  <input type="checkbox" placeholder="Enter your Email" name="pizzaname" onChange={hc}/> 7
                  Cheeze <br />
                </td>
              </tr>
              <tr>
                <th>Outlet City:</th>
                <td>
                  <select>
                    <option value="" selected="" disable="" hidden="">
                      --List of Area--
                    </option>
                    <option name='Ahmedabad'>Ahmedabad</option>
                    <option name='Gandhinagar'>Gandhinagar</option>
                    <option name='Baroda'>Baroda</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>Order date:</th>
                <td>
                  <input type="date" name='date' />
                </td>
              </tr>
              <tr>
                <th>Comment:</th>
                <td>
                  <textarea cols="15" rows="2" name="msg"></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>

        <fieldset>
          <legend>Scale Ordered Pizza</legend>
          <table rules="all">
            <tbody>
              <tr>
                <th>Scale</th>
                <th>Good</th>
                <th>Avg.</th>
                <th>Bad</th>
              </tr>
              <tr>
                <th>Quality</th>
                <th>
                  <input type="radio" name="a1" checked="" />
                </th>
                <th>
                  <input type="radio" name="a1" />
                </th>
                <th>
                  <input type="radio" name="a1" />
                </th>
              </tr>
              <tr>
                <th>Quantity</th>
                <th>
                  <input type="radio" name="a2" checked="" />
                </th>
                <th>
                  <input type="radio" name="a2" />
                </th>
                <th>
                  <input type="radio" name="a2" />
                </th>
              </tr>
              <tr>
                <th>Freshness</th>
                <th>
                  <input type="radio" name="a3" />
                </th>
                <th>
                  <input type="radio" name="a3" checked="" />
                </th>
                <th>
                  <input type="radio" name="a3" />
                </th>
              </tr>
              <tr>
                <th>
                  Overall <br />
                  Rating
                </th>
                <th colspan="3">
                  0<input type="range" scale="1" /> 10
                </th>
              </tr>
              <tr align="center">
                <td colspan="4">
                  <input type="submit" />
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </form>
    </>
  );
}
