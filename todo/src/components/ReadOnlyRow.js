import React from 'react';

const ReadOnlyRow =({contact, handleEditClick, handleDeleteClick }) => {
    return(
        <tr>
          <td>{contact.Time}</td>
          <td>{contact.Activity}</td>
          <td>
            <button 
            type="button" 
            onClick={(event) => handleEditClick(event, contact)}>
              Update
              </button>

              <button type="button" 
              onClick={()=> handleDeleteClick(contact.id) }
              >Delete
              </button>
          </td>
        </tr>
    );
};

export default ReadOnlyRow;