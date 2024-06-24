// import { useMemo } from "react";
// import {
//   MaterialReactTable,
//   useMaterialReactTable,
//   type MRT_ColumnDef,
// } from "material-react-table";
// import { dataTiang } from "@/lib/mock/mockTiang";

// const data = dataTiang;

// //----------------------------------------------------------------------------------------
// // //example data type
// // type Person = {
// //   name: {
// //     firstName: string;
// //     lastName: string;
// //   };
// //   address: string;
// //   city: string;
// //   state: string;
// // };

// // type DataTiang = {
// //   id: number;
// //   deviceCode: string;
// //   nama: string;
// //   lat: number;
// //   lng: number;
// // };

// //----------------------------------------------------------------------------------------
// //nested data is ok, see accessorKeys in ColumnDef below
// // const data: Person[] = [
// //   {
// //     name: {
// //       firstName: "John",
// //       lastName: "Doe",
// //     },
// //     address: "261 Erdman Ford",
// //     city: "East Daphne",
// //     state: "Kentucky",
// //   },
// //   {
// //     name: {
// //       firstName: "Jane",
// //       lastName: "Doe",
// //     },
// //     address: "769 Dominic Grove",
// //     city: "Columbus",
// //     state: "Ohio",
// //   },
// //   {
// //     name: {
// //       firstName: "Joe",
// //       lastName: "Doe",
// //     },
// //     address: "566 Brakus Inlet",
// //     city: "South Linda",
// //     state: "West Virginia",
// //   },
// //   {
// //     name: {
// //       firstName: "Kevin",
// //       lastName: "Vandy",
// //     },
// //     address: "722 Emie Stream",
// //     city: "Lincoln",
// //     state: "Nebraska",
// //   },
// //   {
// //     name: {
// //       firstName: "Joshua",
// //       lastName: "Rolluffs",
// //     },
// //     address: "32188 Larkin Turnpike",
// //     city: "Omaha",
// //     state: "Nebraska",
// //   },
// // ];

// // const data: DataTiang[] = [
// //   {
// //     id: 2,
// //     deviceCode: "2gsfbdf",
// //     nama: "tiang2",
// //     lat: -5.358543,
// //     lng: 105.314862,
// //   },
// //   {
// //     id: 3,
// //     deviceCode: "3asvdfv",
// //     nama: "tiang3",
// //     lat: -5.359269,
// //     lng: 105.314878,
// //   },
// //   {
// //     id: 4,
// //     deviceCode: "4psdfomv",
// //     nama: "tiang4",
// //     lat: -5.359969,
// //     lng: 105.314873,
// //   },
// // ];
// //----------------------------------------------------------------------------------------
// const Example = () => {
//   //should be memoized or stable
//   //   const columns = useMemo<MRT_ColumnDef<Person>[]>(
//   //     () => [
//   //       {
//   //         accessorKey: "name.firstName", //access nested data with dot notation
//   //         header: "First Name",
//   //         size: 150,
//   //       },
//   //       {
//   //         accessorKey: "name.firstName",
//   //         header: "Last Name",
//   //         size: 150,
//   //       },
//   //       {
//   //         accessorKey: "address", //normal accessorKey
//   //         header: "Address",
//   //         size: 200,
//   //       },
//   //       {
//   //         accessorKey: "city",
//   //         header: "City",
//   //         size: 150,
//   //       },
//   //       {
//   //         accessorKey: "state",
//   //         header: "State",
//   //         size: 150,
//   //       },
//   //     ],
//   //     []
//   //   );

//   //   const table = useMaterialReactTable({
//   //     columns,
//   //     data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
//   //   });
//   const table1 = useMaterialReactTable({
//     columns,
//     data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
//   });

//   return <MaterialReactTable table={table1} />;
// };

// export default Example;

"use client";
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { dataTiang } from "@/lib/mock/mockTiang";

export default function TableMinimalMe() {
  const data = dataTiang;
  const columns = useMemo<MRT_ColumnDef<DataTiang>[]>(
    () => [
      {
        accessorKey: "id", //access nested data with dot notation
        header: "id",
        size: 150,
      },
      {
        accessorKey: "nama",
        header: "nama",
        size: 150,
      },
      {
        accessorKey: "deviceCode", //normal accessorKey
        header: "deviceCode",
        size: 200,
      },
      {
        accessorKey: "lat",
        header: "lat",
        size: 150,
      },
      {
        accessorKey: "lng",
        header: "lng",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableStickyHeader: true,
    enableStickyFooter: true,
    muiTableContainerProps: { sx: { maxHeight: "600px" } },
    initialState: { pagination: { pageSize: 15, pageIndex: 0 } },
    // muiTableContainerProps={{ sx: { maxHeight: '500px' } }}
  });
  return <MaterialReactTable table={table} />;
}
