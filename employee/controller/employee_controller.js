import { Employee } from "../model/employee_model.js";

export const insertEmployee = async (req, res) => {
  try {
    const employee = req.body;
    const result = await Employee.create(employee);
    res.json({
      status: true,
      message: "Employee inserted successfully !",
      result,
    });
  } catch (err) {
    res.status(401).json({
      status: false,
      message: "Employee not inserted !",
      err: err.message,
    });
  }
};

export const displayEmployee = async (req, res) => {
  try {
    const data = await Employee.find();
    res.json({
      status: true,
      message: "Employee fetched successfully !",
      data,
    });
  } catch (err) {
    res.status(401).json({
      status: false,
      message: "Employee not display !",
      err: err.message,
    });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const id = req.body.id;
    const employee = req.body;
    const result = await Employee.findByIdAndUpdate(id, employee);
    res.json({
      status: true,
      message: "Employee updated successfully !",
      result,
    });
  } catch (err) {
    res.status(401).json({
      status: false,
      message: "Employee not updated !",
      err: err.message,
    });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Employee.findByIdAndDelete(id);
    res.json({
      status: true,
      message: "Employee deleted successfully !",
      result,
    });
  } catch (err) {
    res.status(401).json({
      status: false,
      message: "Employee not deleted !",
      err: err.message,
    });
  }
};

export const searchByName = async (req, res) => {
  try {
    const name = req.params.name;
    const data = await Employee.find({ name });
    res.json({
      status: true,
      message: "Employee searched successfully !",
      data,
    });
  } catch (err) {
    res.status(401).json({
      status: false,
      message: "Employee not found!",
      err: err.message,
    });
  }
};

export const searchById = async (req, res) => {
  try {
    const id = req.query.id;
    const data = await Employee.find({ id });
    res.json({
      status: true,
      message: "Employee searched successfully !",
      data,
    });
  } catch (err) {
    res.status(401).json({
      status: false,
      message: "Employee not found!",
      err: err.message,
    });
  }
};

export const searchByRole = async (req, res) => {
  try {
    const role = req.query.role;
    const data = await Employee.find({ role });
    res.json({
      status: true,
      message: "Employee searched successfully !",
      data,
    });
  } catch (err) {
    res.status(401).json({
      status: false,
      message: "Employee not found!",
      err: err.message,
    });
  }
};

export const pagination = async (req, res) => {
  try {
    const { count, page } = req.query;
    const end = count * page - 1;
    const start = end - count + 1;

    const result = await Employee.find();
    const data = result.filter((val, i) => i >= start && i <= end);
    if (data.length > 0) {
      res.json({
        status: true,
        message: "Employee fetched successfully !",
        data,
      });
    } else {
      res.json({
        status: false,
        message: "Employee not found !",
        data,
      });
    }
  } catch (err) {
    res.status(401).json({
      status: false,
      message: "Employee not found!",
      err: err.message,
    });
  }
};

// base_url/api/employee?role="Frontend Developer"
// base_url/api/employee?id=123
// base_url/api/employee?id=123&role="Fr...."
//

export const searchEmployee = async (req, res) => {
  try {
    const search = req.query;
    const filter = {};

    Object.entries(search).forEach((obj) => {
      filter.obj[0] = obj;
    });

    if (name) {
      filter.name = name;
    } else if (emp_id) {
      filter.emp_id = emp_id;
    } else if (role) {
      filter.role = role;
    } else if (salary) {
      filter.salary = salary;
    } else if (age) {
      filter.age = age;
    }
    const data = await Employee.find(filter);

    res.json({
      status: true,
      message: "Employee searched successfully !",
      data,
    });
  } catch (err) {
    res.status(401).json({
      status: false,
      message: "Employee not found!",
      err: err.message,
    });
  }
};
