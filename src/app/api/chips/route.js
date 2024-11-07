import { NextResponse } from 'next/server';
import {getAllChipsDB} from '@/app/actions';

export async function GET() {
  try {
    const {chips} = await getAllChipsDB();
    return NextResponse.json({ message: 'Ok', chips });
  } catch (error) {
    return NextResponse.json({ message: 'Error', error });
  }
}
