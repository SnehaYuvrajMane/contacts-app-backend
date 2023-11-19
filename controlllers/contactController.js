const mongoose = require('mongoose');
const Contact = require('../models/contactModel');

const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find(req.query);
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createContact = async (req, res) => {
    const contact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        domain: req.body.domain,
        available: req.body.available
    })
    try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        res.json(contact);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const updateContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (contact) {
            contact.name = req.body.name || contact.name;
            contact.email = req.body.email || contact.email;
            contact.phone = req.body.phone || contact.phone;
            const updatedContact = await contact.save();
            res.json(updatedContact);
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (contact) {
            await contact.remove();
            res.json({ message: 'Contact removed' })
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = {
    getAllContacts,
    createContact,
    getContactById,
    updateContact,
    deleteContact
}