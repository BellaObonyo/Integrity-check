import React, { useState } from "react";
import { Card, CardBody, Col, Container, Row, Button } from "reactstrap";

const Alerts = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);

    const handleFileUpload = (e) => {
    };

    const statusOptions = ["New", "Open", "Closed"];

    const categoryOptions = ["Malware", "Sniffing", "Scanning", "DDOS","Other"];

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleStatusChange = (e) => {
        setSelectedStatus(e.target.value);
    };

    return (
        <div className="page-content">
            <Container fluid>
                <Row>
                    <Col>
                        <div className="top-area bg-primary" style={{ color: "white", padding: "10px", display: "flex", alignItems: "center" }}>
                            <div className="icon-container" style={{ backgroundColor: "white", borderRadius: "50%", width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <i className="bx bxs-file" style={{ fontSize: "24px" }}></i>
                            </div>
                            <div className="text-container" style={{ marginLeft: "10px" }}>Add content</div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ borderRadius: "10px", marginTop: "10px" }}>
                            <CardBody className="p-4" style={{ display: "flex", flexDirection: "column" }}>
                                <div className="title" style={{ marginBottom: "10px", fontSize: "20px" }}>Content Parameters</div>
                                <div className="content-parameters" style={{ display: "flex", flexDirection: "row" }}>
                                    <div className="parameter-row" style={{ display: "flex", marginBottom: "10px", marginRight: "10px", alignItems: "center" }}>
                                        <div className="parameter-title" style={{ marginRight: "10px", borderRadius: "16px" }}>Title</div>
                                        <input type="text" className="form-control" style={{ width: "150px", borderRadius: "16px" }} />
                                    </div>
                                    <div className="parameter-row" style={{ display: "flex", marginBottom: "10px", marginRight: "10px", alignItems: "center" }}>
                                        <div className="parameter-title" style={{ marginRight: "10px" }}>Category</div>
                                        <select value={selectedCategory} onChange={handleCategoryChange} className="form-select" style={{ borderRadius: "16px", padding: "5px 30px", width: "150px" }}>
                                            <option value="">Select here</option>
                                            {categoryOptions.map((category, index) => (
                                                <option key={index} value={category}>{category}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="parameter-row" style={{ display: "flex", marginBottom: "10px", marginRight: "10px", alignItems: "center" }}>
                                        <div className="parameter-title" style={{ marginRight: "10px" }}>Status</div>
                                        <select value={selectedStatus} onChange={handleStatusChange} className="form-select" style={{ borderRadius: "16px", padding: "5px 30px", width: "150px" }}>
                                            <option value="">Select Status</option>
                                            {statusOptions.map((status, index) => (
                                                <option key={index} value={status}>{status}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="p-4" style={{ display: "flex", flexDirection: "column" }}>
                                    <div className="description" style={{ marginBottom: "20px" }}>
                                        <div className="description" style={{ marginTop: "20px", marginBottom: "10px" }}>Description</div>
                                        <textarea className="form-control" rows="5" style={{ borderRadius: "10px", width: "100%", maxWidth: "500px" }}></textarea>
                                    </div>
                                    <div style={{ marginBottom: "10px" }}>Drag and drop media files here, i.e Pictures, videos, or audio content</div>
                                    <div className="file-upload-area" style={{ width: "100%", maxWidth: "500px", border: "1px solid #ccc", borderRadius: "10px", padding: "20px", textAlign: "center" }}>
                                        <label htmlFor="file-upload-input">
                                            <div style={{ fontSize: "48px", color: "#ccc", marginBottom: "10px" }}>
                                                <i className="bx bxs-cloud-upload"></i>
                                            </div>
                                            <div style={{ marginBottom: "10px" }}>Click or Drag & Drop multimedia here</div>
                                            <div>Media types allowed: png, jpeg, pdf, mp3,mp4 - 5mbs Max</div>
                                        </label>
                                        <input type="file" id="file-upload-input" onChange={handleFileUpload} style={{ display: "none" }} />
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                                    <Button color="success" style={{ marginRight: "10px" }} size="lg">Save</Button>
                                    <Button color="danger" style={{ marginLeft: "10px" }} size="lg">Cancel</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Alerts;
