//@description Get all contacts
//@route Get /api/contacts
//@access public
const getContacts =  (req , res) => {
    res.status(200).json({ message : 'Get all contacts'})
}

//@description Create all contacts
//@route Post /api/contacts
//@access public
const createContact = (req , res) =>{
    console.log("Requested body is " , req.body)

    const {name , email , phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All Fields are mandatory!")
    }

    res.status(201).json({message : 'Create all Contacts'})
}
//@description Get contact
//@route Get /api/contacts/:id
//@access public
const getContact =  (req , res) => {
    res.status(200).json({message : `Get a contact for ${req.params.id}`})
}

//@description Update contact
//@route Put /api/contacts/:id
//@access public
const updateContact =  (req , res) => {
    res.status(200).json({message : `Updated a contact for ${req.params.id}`})
}

//@description Update contact
//@route Delete /api/contacts/:id
//@access public
const deleteContact =  (req , res) => {
    res.status(200).json({message : `deleted a contact for ${req.params.id}`})
}

module.exports = {getContacts , createContact , getContact , updateContact , deleteContact}

