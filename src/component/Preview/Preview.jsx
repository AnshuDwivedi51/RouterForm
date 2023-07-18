import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap';
import Img from "./no-data-found.webp";
import { useNavigate } from 'react-router';
const getData = () => {
    const gdata = JSON.parse(localStorage.getItem("formData"));
    if (gdata != null) {
        return gdata
    }
    else {
        return []
    }
}
function Preview() {
    const [DeleteformData, setFormData] = useState([]);
    const formData = getData();
    const navigate = useNavigate();
    const handleDelete = (id) => {
        const updatedData = formData.filter((item) => {
            if (item.id !== id) {
                return true;
            }
        });
        setFormData(updatedData);
        localStorage.setItem("formData", JSON.stringify(updatedData));
    }
    return (
        <Container>
            <div>
                <h1>Form Data</h1>
                {formData.length > 0 ? (
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Offecial Email</th>
                                <th>Mobile</th>
                                <th>Designation</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.map((formData, index) => (
                                <tr key={index}>
                                    <td>{formData.id}</td>
                                    <td>{formData.fname} {formData.lname}</td>
                                    <td>{formData.email}</td>
                                    <td>{formData.ofemail}</td>
                                    <td>{formData.mobile}</td>
                                    <td>{formData.designation}</td>
                                    <td>
                                        <button type='button' className='btn btn-info' onClick={() => navigate("/edit")}> Edit</button> ||
                                        <button type='button' className='btn btn-danger mx-1' onClick={() => handleDelete(formData.id)}> Delete</button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <div className="nodata">
                        <img src={Img} className='img-fluid' alt="" />
                    </div>
                )}
                {/* {formData.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Address 2</th>
                                <th>City</th>
                                <th>Zip</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.map((formData, index) => (
                                <tr key={index}>
                                    <td>{formData.fname}</td>
                                    <td>{formData.lname}</td>
                                    <td>{formData.email}</td>
                                    <td>{formData.address}</td>
                                    <td>{formData.secaddress}</td>
                                    <td>{formData.city}</td>
                                    <td>{formData.zip}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="nodata">
                        <img src={Img} className='img-fluid' alt="" />
                    </div>
                )} */}
            </div>
        </Container>
    )
}

export default Preview