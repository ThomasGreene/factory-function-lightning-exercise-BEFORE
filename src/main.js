function contactFactory(contactData) {
        let contact = {
                name: null,
                title: null,
                email: null
        }
        for (let i=0; i < contactData.length; i++) {
                contact.name = contactData[0]
                contact.title = contactData[1]
                contact.email = contactData[2]
        }
        return contact
}

function createContact(name, title, email) {
        let contactArray = [name, title, email]
        let contact = contactFactory(contactArray);
        console.table(contact)
}

createContact('Thomas', 'student', 'email@email.com');