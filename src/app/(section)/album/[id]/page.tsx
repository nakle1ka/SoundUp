'use client'
import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

    const songs = [
        {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
        },
        {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
        },
    ]

    
    const AlbumPage = () => {

    
        return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {songs.map((song) => (
                    <TableRow key={song.invoice}>
                        <TableCell className="font-medium">{song.invoice}</TableCell>
                        <TableCell>{song.paymentStatus}</TableCell>
                        <TableCell>{song.paymentMethod}</TableCell>
                        <TableCell className="text-right">{song.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        )
    };
    
    export default AlbumPage;