import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { toast } from "react-toastify";
import {
  SaveOutlined,
  DeleteOutlined,
  PlusOutlined,
  QuestionOutlined,
} from "@ant-design/icons";
import "./ManageProducts.css";
import NoPreview from "../assets/no-preview.jpg";
import { Brand } from "../helper/Options";
import { Variants } from "antd/es/config-provider";

const ManageProducts = ({ setProducts, products }) => {
  const navigate = useNavigate();

  // State and Ref for image handling
  const [imagePreview, setImagePreview] = useState(NoPreview);
  const fileInputRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handler for when a user selects an image file
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = (data) => {
    const finalData = {
      ...data,
      image: imagePreview, // Use the selected image preview
      includeTax: data.includeTax || false,
      hasVariants: data.hasVariants || false,
    };
    setProducts([...products, finalData]);
    message.success("Product saved!");
    navigate("/list");
    toast.success("your data save successfully!");
  };

  return (
    <>
    <div className="container">
      <h2>
        Manage Products <QuestionOutlined className="h2_icon" />
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-grid">
          <div className="form-group">
            <label style={{ color: "red" }}>Name</label>
            <input
              {...register("name", { required: "Product name is required" })}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          <div className="form-group">
            <label>Code</label>
            <input {...register("code")} />
          </div>



          <div className="form-group">
            <label style={{ color: "red" }}>Brand</label>
            <div className="inline-input">
              <select {...register("Brand", { required: "Brand is required" })}>
                <option value="">Select Brand</option>
                {Brand?.map((e, i) => (
                  <option value="" key={e?.id}>{e?.name}</option>
                ))}
              </select>
              <button type="button" className="add-btn">
                <PlusOutlined />
              </button>
            </div>
            {errors.brand && <p className="error">{errors.brand.message}</p>}
          </div>





          <div className="form-group">
            <label style={{ color: "red" }}>Category</label>
            <div className="inline-input">
              <select
                {...register("category", { required: "Category is required" })}
              >
                <option value="">Select Category</option>
                <option value="Cloth">Cloth</option>
                <option value="Animal">Animal</option>
                <option value="babyCare">Baby Care</option>
                <option value="computer">computer</option>
                <option value="deneme">deneme</option>
                <option value="Mobiles">Mobiles</option>
              </select>
              <button type="button" className="add-btn">
                <PlusOutlined />
              </button>
            </div>
            {errors.category && (
              <p className="error">{errors.category.message}</p>
            )}
          </div>

          <div className="form-group">
            <label style={{ color: "red" }}>Base Unit</label>
            <div className="inline-input">
              <select {...register("unit", { required: "Unit is required" })}>
                <option value="">Select Unit</option>
                <option value="kg">kg</option>
                <option value="pcs">pcs</option>
                <option value="Roll">Roll</option>
                <option value="sheet">sheet</option>
                <option value="box">box</option>
              </select>
              <button type="button" className="add-btn">
                <PlusOutlined />
              </button>
            </div>
            {errors.unit && <p className="error">{errors.unit.message}</p>}
          </div>

          <div className="form-group">
            <label>Tax</label>
            <select {...register("tax")}>
              <option value="None">None</option>
              <option value="GST">GST</option>
              <option value="VAT">VAT</option>
            </select>
          </div>

          <div className="form-group">
            <label>SKU Code</label>
            <input {...register("skuCode")} />
          </div>

          <div className="form-group">
            <label>SKU Name</label>
            <input {...register("skuName")} />
          </div>

          <div className="form-group">
            <label>Barcode Number</label>
            <input {...register("barcode")} />
          </div>

          <div className="form-group">
            <label>Alert Quantity</label>
            <input type="number" {...register("alertQty")} />
          </div>

          <div className="form-group">
            <label>MRP</label>
            <input type="number" {...register("mrp")} />
          </div>

          <div className="form-group">
            <label>Purchase Price</label>
            <input type="number" {...register("purchasePrice")} />
          </div>

          <div className="form-group">
            <label>Margin (%)</label>
            <input type="number" {...register("margin")} />
          </div>

          <div className="form-group">
            <label>
              <input type="checkbox" {...register("includeTax")} /> Include Tax
            </label>
          </div>

          <div className="form-group">
            <label>Sales Price</label>
            <input type="number" {...register("salesPrice")} />
          </div>

          <div className="form-group full-width">
            <label>Description</label>
            <textarea {...register("description")} rows="3"></textarea>
          </div>

          {/* === UPDATED PRODUCT IMAGE SECTION === */}
          <div className="form-group full-width">
            <label>Product Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />

            <div className="upload-box">
              <img
                src={imagePreview}
                alt="Preview"
                width="50px"
                style={{ cursor: "pointer" }}
                onClick={() => fileInputRef.current.click()}
              />
              <button
                style={{ padding: "10px 15px" }}
                type="button"
                className="add-btn green"
                onClick={() => fileInputRef.current.click()}
              >
                Add
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>
              <input type="checkbox" {...register("hasVariants")} />
              Has Multiple Variants
            </label>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="green">
            <SaveOutlined /> Save
          </button>

          <button type="button" className="red">
            <DeleteOutlined /> Cancel
          </button>
        </div>
      </form>
    </div>
    </>
  );
};
export default ManageProducts;
