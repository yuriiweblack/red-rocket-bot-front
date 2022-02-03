import React, { Component } from "react";
import { Table } from "reactstrap";
import NewCategoriesModal from "../components_categories/NewCategoriesModal";
import ConfirmsRemovalModal from "../components_categories/ConfirmsRemovalModal";


class CategoryList extends Component {
  render() {
    const categories = this.props.categories;
    return (
      <Table class="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th style={{ paddingLeft: "240px" }}>Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!categories || categories.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>It haven't categories yet</b>
              </td>
            </tr>
          ) : (
            categories.map(category => (
              <tr key={category.pk}>
                <td>{category.title}</td>
                <td>{category.description}</td>
                <td align="center">
                  <NewCategoriesModal
                    create={false}
                    category={category}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmsRemovalModal
                    pk={category.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default CategoryList;