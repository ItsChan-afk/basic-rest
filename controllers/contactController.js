const asyncHandler = require('express-async-handler')

//@description Get all contacts
//@route Get /api/contacts
//@access public
const getContacts =  asyncHandler( async (req , res) => {
    res.status(200).json({ message : 'Get all contacts'})
});

//@description Create all contacts
//@route Post /api/contacts
//@access public
const createContact = asyncHandler (async (req , res) =>{
    console.log("Requested body is " , req.body)

    const {name , email , phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All Fields are mandatory!")
    }

    res.status(201).json({message : 'Create all Contacts'})
});
//@description Get contact
//@route Get /api/contacts/:id
//@access public
const getContact =  asyncHandler (async (req , res) => {
    res.status(200).json({message : `Get a contact for ${req.params.id}`})
});

//@description Update contact
//@route Put /api/contacts/:id
//@access public
const updateContact = asyncHandler(async(req , res) => {
    res.status(200).json({message : `Updated a contact for ${req.params.id}`})
});

//@description Update contact
//@route Delete /api/contacts/:id
//@access public
const deleteContact =  asyncHandler(async (req , res) => {
    res.status(200).json({message : `deleted a contact for ${req.params.id}`})
});

module.exports = {getContacts , createContact , getContact , updateContact , deleteContact}

