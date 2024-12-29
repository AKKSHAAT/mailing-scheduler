import { NextResponse } from 'next/server';
import {recipientLists} from '@/app/db';

export async function GET() {
    return NextResponse.json({ recipientLists });
  }
  
  