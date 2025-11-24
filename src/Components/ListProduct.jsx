import { MoreOutlined } from "@ant-design/icons";
import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ListProducts = ({ products }) => {
  const navigate = useNavigate();
  return (
    <>
    <div className="container">
      <div style={{display:"flex", justifyContent:"space-between"}}>
      <h2>Product List</h2>
      <Button variant="contained" color="success" onClick={() => toast.success('navigate the add product components')}>
     <NavLink to={navigate("/")}>Add Product</NavLink>
    </Button>
  
      </div>

      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <div>
          <table
            border="1"
            cellPadding="10"
            style={{ width: "100%", borderCollapse: "collapse" }}
          >
            <thead style={{ backgroundColor: "#f2f2f2" }}>
              <tr>
                <th></th>
                <th></th>
                <th>Brand</th>
                <th>Name</th>
                <th>Unit</th>
                <th>Category</th>
                <th>Purchase Price</th>
                <th>Sales Price</th>
                <th>MRP</th>
                <th>Alert Qulity</th>
                <th>SKUName</th>
                <th>Margin</th>
                <th>Product Taxes</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>
                    <button style={{fontSize:"25px" , style:"none"}}><MoreOutlined/></button>
                    </td>
                  <td>
                    <img src={product.image} alt="Product" width="50" />
                  </td>
                  <td>{product.brand}</td>
                  <td>{product.name}</td>
                  <td>{product.unit}</td>
                  <td>{product.category}</td>
                  <td>{product.purchasePrice}</td>
                  <td>{product.salesPrice}</td>
                  <td>{product.mrp}</td>
                  <td>{product.alertQty}</td>
                  <td>{product.skuName}</td>
                  <td>{product.margin}</td>
                  <td>{product.tax}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </>
  );
};

export default ListProducts;
