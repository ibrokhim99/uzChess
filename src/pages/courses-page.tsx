import { Button } from "@/components/ui/button";
import { useGetList } from "@/hooks/api/courses/useGetList";
import { COURSES_ROUT } from "@/router/routes";
import { Eye, Pencil, Play, Trash2 } from "lucide-react";
import {createColumnHelper, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table"
import {  Data } from "@/api/types";
import _ from "lodash";


const columnHelper = createColumnHelper<Data>()

const columns = [
    columnHelper.accessor('name',{
        header: ()=> 'Kurs nomi',
        cell:(info)=> info.getValue(), 
    }),
    columnHelper.accessor('short_description',{
        header: ()=> 'Tavsifi',
        cell:(info)=> info.getValue(), 
    }),
    columnHelper.accessor('lessons_count',{
        header: ()=> 'Dars soni',
        cell:(info)=>   (
                     <div className="flex justify-start items-center space-x-2">
                    <Play size="12px"/>
                    <div>
                    {info.getValue()}
                    </div>
                    </div>
        ),
    }),
    columnHelper.accessor('duration',{
        header: ()=> 'Davomiyligi',
        cell:(info)=> info.getValue(), 
    }),
    columnHelper.accessor('_id',{
        header: ()=> 'Tahrirlash',
        cell:()=> (
            <div className="py-2 flex justify-start space-x-2">
                <Button variant="default" size="icon">
                    <Eye size="14px" />
                </Button>
                <Button variant="default" size="icon">
                    <Pencil size="14px" />
                </Button>
                <Button variant="destructive" size="icon">
                    <Trash2 size="14px" />
                </Button>
            </div>
        )
    }),
]

const initialData = [{
      completed_lessons_count: 0,
      duration: 0,
      _id: "",
      name: "",
      short_description:"",
      icon: "",
      lessons_count: "",
      is_enrolled: true,
      enrolled_count:0
}]

export default function CouresePage(){
    const {data} = useGetList()
    
    const values = _.get(data, "data.data", initialData)
    
    const table = useReactTable({
        data:   values , 
        columns,
        getCoreRowModel: getCoreRowModel(),
        })
    
    return(
        <div className="relative overflow-x-auto sm:rounded-lg container mx-auto p-4">
        <table className="w-lg text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg">
            <thead className="text-xs text-gray-700 uppercase border-r border-l border-b border-t dark:text-gray-400">
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th key={header.id} scope="col" className="px-4 py-2">
                                {flexRender(header.column.columnDef.header, header.getContext())}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody className="text-xs text-gray-700">
                {table.getRowModel().rows.map((row) => (
                    <tr key={row.id} className="bg-white border-r border-l border-b dark:bg-gray-800 dark:border-gray-700">
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id} className="px-4 py-0 font-bold">
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    
    
        );
        }
CouresePage.path = COURSES_ROUT


