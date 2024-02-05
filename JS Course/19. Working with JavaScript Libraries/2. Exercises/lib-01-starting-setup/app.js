const customers = ['Max', 'Manuel', 'Anna'];

const activeACustomers = ['Max', 'Manuel'];

const inactiveCustomers = _.difference(customers,activeACustomers)

console.log(inactiveCustomers);