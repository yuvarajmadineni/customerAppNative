import AsyncStorage from '@react-native-community/async-storage';

let customers = [
    { id: '099090', name: "Vivek Singhwal", email: "vivek@pyther.com", phone: "5433233232", address: "Bengaluru" },
    { id: '787878', name: "Sipeeka", email: "sipeeka@pyther.com", phone: "6644564544", address: "Ahmedabad" }
]; //default values


export const getCustomers = async () => {
    let customerList = await AsyncStorage.getItem('customers');
    if (customerList == null || customerList == "null") {
        customers = [];
        return [];
    } else {
        customers = JSON.parse(customerList);
        return customers;
    }
}
const updateAsyncData = async () => {
    await AsyncStorage.setItem('customers', JSON.stringify(customers));
}

export const addCustomer = async (customer) => {
    customer.id = Date.now() + 'r';
    customers.push(customer);
    await updateAsyncData();
}

export var deleteCustomer = async (id) => {
    customers = customers.filter((item) => (item.id != id));
    await updateAsyncData();
}

export const getCustomerById = (id) => {
    var list = customers.filter((item) => (item.id == id));
    if (list.length > 0) {
        return list[0];
    } else {
        return {}
    }
}

export const updateCustomer = async (customer) => {
    var list = customers.filter((item) => (item.id == customer.id));
    if (list.length > 0) {
        list[0].name = customer.name;
        list[0].email = customer.email;
        list[0].phone = customer.phone;
        list[0].address = customer.address;
    }
    await updateAsyncData();
}