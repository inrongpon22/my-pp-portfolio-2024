import { createClient } from "@/app/utils/supabase/client"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const body = await request.json()
  const { title, description } = body
  if (!title || !description) {
    return NextResponse.json(
      { message: "Request fields are missing" },
      { status: 400 }
    )
  }
  try {
    const supabase = createClient()
    const resolvedParams = await context.params
    const { id } = resolvedParams
    const { data, error } = await supabase
      .from("projects")
      .update(body)
      .eq("id", id)
    if (error) {
      return NextResponse.json(
        { message: "Failed to update project" },
        { status: 500 }
      )
    }
    return NextResponse.json(data)
  } catch (error) {
    console.log("update project error:", error)
    return NextResponse.json(
      { message: "Failed to update project" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = createClient()
    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", id)
    if (error) {
      return NextResponse.json(
        { message: "Failed to delete project" },
        { status: 500 }
      )
    }
    return NextResponse.json({
      message: "Project deleted successfully",
    },{status: 200})
  } catch (error) {
    console.log("delete project error:", error)
    return NextResponse.json(
      { message: "Failed to delete project" },
      { status: 500 }
    )
  }
}
