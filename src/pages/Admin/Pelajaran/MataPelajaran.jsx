import React from "react";

const MataPelajaran = () => {
    const mataPelajaranList = [
        "Matematika",
        "Bahasa Indonesia",
        "Bahasa Inggris",
        "Fisika",
        "Kimia",
        "Biologi",
        "Sejarah",
        "Geografi",
        "Ekonomi",
    ];

    return (
        <div className="wrapper">
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Mata Pelajaran</h1>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="content">
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-header">
                                <a href="/tambah-pelajaran" className="btn btn-primary">
                                    <i className="fas fa-plus"></i> Tambah
                                </a>
                                <div className="float-right">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Masukkan kata kunci dan enter..."
                                        style={{ width: "500px", display: "inline-block" }}
                                    />
                                    <button className="btn btn-default">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="card-body">
                                <table className="table table-bordered">
                                    <thead className="bg-primary">
                                        <tr>
                                            <th style={{ width: "10px" }}>No.</th>
                                            <th>Nama Mata Pelajaran</th>
                                            <th style={{ width: "150px" }}>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Matematika</td>
                                            <td>
                                                <button className="btn btn-sm btn-primary mr-1">
                                                    <i className="fas fa-edit"></i>
                                                </button>
                                                <button className="btn btn-sm btn-danger">
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Bahasa Indonesia</td>
                                            <td>
                                                <button className="btn btn-sm btn-primary mr-1">
                                                    <i className="fas fa-edit"></i>
                                                </button>
                                                <button className="btn btn-sm btn-danger">
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="card-footer clearfix">
                                <ul className="pagination pagination-sm m-0 float-right">
                                    <li className="page-item">
                                        <a href="#" className="page-link">
                                            &laquo; Previous
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <a href="#" className="page-link">
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a href="#" className="page-link">
                                            Next &raquo;
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MataPelajaran;
