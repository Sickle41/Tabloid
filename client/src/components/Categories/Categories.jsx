import { useEffect, useState } from 'react';
import { getAllCategories, addCategory, updateCategory, deleteCategory} from "../../managers/categoryManager";
import "./Categories.css";

function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = () => {
        getAllCategories()
            .then((data) => {
                setCategories(data);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    };

    const [editingCategory, setEditingCategory] = useState(null);
    const [editedCategoryName, setEditedCategoryName] = useState("");

    const handleDeleteCategory = (id) => {
        deleteCategory(id)
            .then(() => {
                fetchCategories(); // Refresh the category list
            })
            .catch((error) => {
                console.error("Error deleting category:", error);
            });
    };

    const handleEditCategory = (category) => {
        setEditingCategory(category);
        setEditedCategoryName(category.name);
    };

    const handleCancelEdit = () => {
        setEditingCategory(null);
        setEditedCategoryName("");
    };

    const handleSaveEdit = () => {
        if (editedCategoryName.trim() === "") {
            alert("Category name cannot be empty.");
            return;
        }

        const updatedCategory = { ...editingCategory, name: editedCategoryName };

        updateCategory(updatedCategory)
            .then(() => {
                fetchCategories(); // Refresh the category list
                setEditingCategory(null);
                setEditedCategoryName("");
            })
            .catch((error) => {
                console.error("Error updating category:", error);
            });
    };


    const [newCategoryName, setNewCategoryName] = useState("");

    const handleAddCategory = () => {
        if (newCategoryName.trim() === "") {
            alert("Category name cannot be empty.");
            return;
        }

        const newCategory = { name: newCategoryName };

        addCategory(newCategory)
            .then(() => {
                fetchCategories(); // Refresh the category list
                setNewCategoryName(""); // Clear the input field
            })
            .catch((error) => {
                console.error("Error adding category:", error);
            });
    };

    return (
        <div className="categories-container">
            <h2>Categories</h2>
            <ul className="categories-list">
                {categories.map((category) => (
                    <li className="category-item" key={category.id}>
                        {editingCategory?.id === category.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editedCategoryName}
                                    onChange={(e) => setEditedCategoryName(e.target.value)}
                                />
                                <div className="category-actions">
                                    <button onClick={handleSaveEdit}>Save</button>
                                    <button onClick={handleCancelEdit}>Cancel</button>
                                </div>
                            </>
                        ) : (
                            <>
                                {category.name}
                                <div className="category-actions">
                                    <button onClick={() => handleEditCategory(category)}>
                                        Edit
                                    </button>
                                    <button onClick={() => handleDeleteCategory(category.id)}>
                                        Delete
                                    </button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="New category name"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
            />
            <button onClick={handleAddCategory}>Add Category</button>
        </div>
    );
}

export default Categories;