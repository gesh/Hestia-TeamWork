var app = app || {};
app.viewmodels = app.viewmodels || {};

(function (scope) {
    scope.contacts = kendo.observable({
        addContact: function () {

            var numRegex = /^\d{10}$/;
            var mailRegex = /\S+@\S+\.\S+/;
            
            var displayName = document.getElementById('contact-name').value;
            var phoneNumber = document.getElementById('contact-number').value;

            if (displayName === null) {
                alert('Name cannot be empty!');
            }

            else if (displayName.length < 3) {
                alert('Name must be at least 3 letters');
            }

            else if (phoneNumber === null) {
                alert('Phone number cannot be empty');
            }
            

            else if (!(phoneNumber.match(numRegex))) {
                alert('Invalid Phone number');
            }
            else {

                // create a new contact
                var contact = navigator.contacts.create();
                contact.displayName = displayName;


                // store contact phone numbers in ContactField[]
                var phoneNumbers = [];
                phoneNumbers[0] = new ContactField('mobile', phoneNumber, true); // preferred number
                contact.phoneNumbers = phoneNumbers;

                console.log(contact);

                // save the contact
                contact.save();
                alert('Contact added successfuly!');
            }
        },
    });

}(app.viewmodels));