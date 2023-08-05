import { EditContact } from "../views/editContact";
const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		demo: [
		  {
			title: "FIRST",
			background: "white",
			initial: "white"
		  },
		  {
			title: "SECOND",
			background: "white",
			initial: "white"
		  }
		],
		contacts: []
	  },
	  actions:{
    
	  editContact:(index, object) =>{
// getStore().contacts[index]=object
getStore().contacts.splice(index,1,object)
console.log(getStore().contacts)
	  },

		saveContact: (contact) => {
		  const store = getStore();
  
		  const updatedContacts = store.contacts.concat(contact);
  
		  setStore({ contacts: updatedContacts });
		},
		deleteContact: (id) => {
		  const store = getStore();
  
		  const updatedContacts = store.contacts.filter((contact, i) => id !== contact.id);
  
		  setStore({ contacts: updatedContacts });
		},
  
		getContacts: () => {
		console.log("blah")  
		  const store = getStore();
  
		  fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
			  if (response.ok) {
				return response.json();
			  } else {
				throw Error("Something is wrong");
			  }
			})
			.then((data) => {
			const newData = data.map(e =>{
e.address = e.address.street
			}) 
			  setStore({ contacts: data });
			})
			.catch((error) => {
			  console.log(error);
			});
		}
	  }
	};
  };
  
  export default getState;