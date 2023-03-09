import { useEffect, useState } from 'react';
import { Table, Tag, Input, Space } from 'antd';
import { useDispatch } from "react-redux";
import { getUserDetails } from "../api/actions"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"

const columns = [
    {
        title: 'S.no',
        dataIndex: 'id',
        key: 'id',
        filterSearch: true,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filterSearch: true,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        filterSearch: true,
    },
    {
        title: 'Role',
        key: 'role',
        dataIndex: 'role',
        render: (_, { role }) => (
            <>
                <Tag color={'geekblue'} key={role}>
                    {role.toUpperCase()}
                </Tag>
            </>
        ),
        filterSearch: true,
    },
    {
        title: 'Actions',
        key: 'actions',
        render: (_, record) => (
            <Space size="middle">
                <EditOutlined style={{ color: "blue" }} />
                <DeleteOutlined style={{ color: "red" }} />
            </Space>
        ),
    }
];

const AdminTable = () => {
    const dispatch = useDispatch();
    const [adminData, setAdminData] = useState([])
    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        const { value } = e.target
        setSearch(value)
        dispatch(getUserDetails()).then((res) => {
            let arr = res.payload.adminData
            setAdminData(arr.filter((item) => item.name.includes(search)))
        })
    }

    const getAdminData = () => {
        dispatch(getUserDetails()).then((res) => {
            setAdminData(res.payload.adminData)
        })
    }

    useEffect(() => {
        getAdminData();
    }, []);

    return (
        <div>
            <Table
                rowSelection={true}
                columns={columns}
                dataSource={adminData}
                title={() => <Input placeholder='Search Here' name="search" value={search} onChange={handleChange} />}
            />
        </div>
    );
}

export default AdminTable;
