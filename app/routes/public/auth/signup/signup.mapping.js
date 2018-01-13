export default [
	['organisationName', 'tenant.name'],
	['addressLineOne', 'tenant.address1'],
	['addressLineTwo', 'tenant.address2'],
	['addressLineThree', 'tenant.address3'],
	['postcode', 'tenant.zip'],
	['country', 'tenant.country'],

	['billingFirstName', 'tenant.billingContact.firstName'],
	['billingLastName', 'tenant.billingContact.lastName'],
	['billingEmail', 'tenant.billingContact.email'],

	['techFirstName', 'tenant.technicalContact.firstName'],
	['techLastName', 'tenant.technicalContact.lastName'],
	['techEmail', 'tenant.technicalContact.email'],

	['mfaEnabled', 'tenant.mfaEnabled', false],

	['personalFirstName', 'admin.firstName'],
	['personalLastName', 'admin.lastName'],
	['personalEmail', 'admin.email'],
	['personalPhoneNumber', 'admin.phoneNumber'],
	['username', 'admin.userName'],
	['password', 'admin.password'],
]
