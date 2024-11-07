import { NextResponse } from 'next/server';
import {getAllMasaDB} from '@/app/actions';

export async function GET() {
  try {
    const {masa} = await getAllMasaDB();
    return NextResponse.json({ message: 'Ok', masa });
  } catch (error) {
    return NextResponse.json({ message: 'Error', error });
  }
}
