import React from 'react';

const EditableRow = ({ editFormData, handleEditFormChange, handleCancalClick }) => {
    return(
        <tr>
            <td>
                <input 
                type="text" 
                required="required" 
                placeholder="Enter a Time..." 
                name="Time"
                value={editFormData.fullName}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
            <input 
                type="text" 
                required="required" 
                placeholder="Enter a Activity..." 
                name="Activity"
                value={editFormData.address}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancalClick}>Cancal</button>
            </td>
        </tr>
    );
};
export default EditableRow;