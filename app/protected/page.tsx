"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface ProjectData {
    id: number; // Adjust the type according to your actual data model
    // include other properties of project data if necessary
}

const ProjectForm = () => {
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [story, setStory] = useState("");
    const [dates, setDates] = useState("");
    const [titleImage, setTitleImage] = useState<File | null>(null);
    const [images, setImages] = useState<File[]>([]);
    const [captions, setCaptions] = useState<string[]>([]);
    const [titles, setTitles] = useState<string[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [titleImagePreview, setTitleImagePreview] = useState<string | null>(null);

    // Update image previews whenever images change
    useEffect(() => {
        // Filter out invalid files (e.g., placeholders) before creating URLs
        const validImages = images.filter((image) => image.size > 0);
        const newImagePreviews = validImages.map((image) =>
            URL.createObjectURL(image)
        );

        setImagePreviews(newImagePreviews);

        // Cleanup: Revoke URLs when they are no longer needed
        return () => {
            newImagePreviews.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [images]);

    const handleTitleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setTitleImage(file);
            const previewUrl = URL.createObjectURL(file);
            setTitleImagePreview(previewUrl);
    
            // Cleanup the preview URL when the component unmounts or the file changes
            return () => {
                URL.revokeObjectURL(previewUrl);
            };
        }
    };

    const handleAddImage = () => {
        // Add a new file and caption slot
        setImages((images) => [...images, new File([], "")]); // Use an empty File as a placeholder for the new file
        setCaptions((captions) => [...captions, ""]); // Add an empty string for the new caption
    };

    const handleImageChange = (index: number, file: File) => {
        const newImages = [...images];
        newImages[index] = file;
        setImages(newImages);
    };

    const handleCaptionChange = (index: number, caption: string) => {
        const newCaptions = [...captions];
        newCaptions[index] = caption;
        setCaptions(newCaptions);
    };

    const handleTitleChange = (index: number, title: string) => {
        const newTitles = [...titles];
        newTitles[index] = title;
        setTitles(newTitles);
    };

    const handleRemoveImage = (index: number) => {
        // Filter out the image and caption at the specified index
        const newImages = images.filter((_, i) => i !== index);
        const newCaptions = captions.filter((_, i) => i !== index);
        const newImagePreviews = imagePreviews.filter((_, i) => i !== index);

        setImages(newImages);
        setCaptions(newCaptions);
        setImagePreviews(newImagePreviews);
    };

    const uploadImage = async (file: File) => {
        const filePath = `public/${Date.now()}_${file.name}`;
        const { data, error } = await supabase.storage
            .from("project-images")
            .upload(filePath, file);

        if (error) throw error;

        return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/project-images/${filePath}`;
    };
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        /*

        // Upload images and get URLs
        const imageUrls = await Promise.all(
            images.map((file) => uploadImage(file))
        );

        // Insert project data into the database
        const { data: projectData, error: projectError } = await supabase
            .from("projects")
            .insert([{ title, slug, story, dates }]);

        if (projectError) {
            console.error(projectError);
            return;
        }

        // Assuming projectData[0].id is the ID of the newly inserted project
        const projectId = projectData?.[0]?.id;

        // Check if projectId is not undefined before proceeding
        if (projectId === undefined) {
            console.error("Project data is null or project ID is undefined.");
            return;
        }

        // Prepare image data with captions
        const imageData = imageUrls.map((url, index) => ({
            project_id: projectId,
            image_url: url,
            caption: captions[index] || null,
        }));

        // Insert image data into the database
        const { error: imagesError } = await supabase
            .from("project_images")
            .insert(imageData);

        if (imagesError) {
            console.error(imagesError);
        } else {
            console.log("Project and images added successfully");
            // Reset form or give user feedback
        }*/
    };

    return (
        <div className="flex justify-center items-center min-h-screen pt-4">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-2 w-96"
            >
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border-2 border-gray-500 p-2 bg-transparent focus:outline-none focus:border-gray-600 focus:bg-gray-900"
                />
                <input
                    type="text"
                    placeholder="Slug"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="border-2 border-gray-500 p-2 bg-transparent focus:outline-none focus:border-gray-600 focus:bg-gray-900"
                />
                <textarea
                    placeholder="Story"
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                    className="border-2 border-gray-500 p-2 bg-transparent focus:outline-none focus:border-gray-600 focus:bg-gray-900 min-h-32"
                />
                <input
                    type="text"
                    placeholder="Dates (YYYY-MM-DD to YYYY-MM-DD)"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    className="border-2 border-gray-500 p-2 bg-transparent focus:outline-none focus:border-gray-600 focus:bg-gray-900"
                />
                <div className="flex flex-col space-y-1">
                    <hr className="border-gray-500 my-4" />
                    <label htmlFor="titleImage" className="text-gray-500">
                        Title Image
                    </label>
                    {titleImagePreview && (
                        <>

                        <div className="w-full mt-2"> {/* Adjust the container as needed */}
                            <Image
                                src={titleImagePreview}
                                alt="Title Image Preview"
                                layout="responsive"
                                width={100} // Placeholder values
                                height={100} // Adjust based on your desired aspect ratio
                                objectFit="contain"
                            />
                        </div>
                        </>
                    )}

                    <input
                        type="file"
                        onChange={handleTitleImageChange}
                        className="border-2 border-gray-500 p-2 bg-transparent focus:outline-none focus:border-gray-600 focus:bg-gray-900"
                    />
                    
                </div>
                {images.map((_, index) => (
                    <>
                    <hr key={index} className="border-gray-500 my-4" />
                    <div key={index} className="flex flex-col space-y-1">
                        {imagePreviews[index] && (
                            <div className="w-full">
                                {" "}
                                {/* This div takes the full width of its parent (the form) */}
                                <Image
                                    src={imagePreviews[index]}
                                    alt="Preview"
                                    layout="responsive"
                                    width={100} // These values are placeholders
                                    height={100} // Adjust based on the aspect ratio of your images
                                    objectFit="contain" // Ensures the image's aspect ratio is maintained
                                />
                            </div>
                        )}
                        <input
                            type="file"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    handleImageChange(index, e.target.files[0]);
                                }
                            }}
                            className="border-2 border-gray-500 p-2 bg-transparent focus:outline-none focus:border-gray-600 focus:bg-gray-900"
                        />
                    
                        <input
                            type="text"
                            placeholder="Image Title"
                            value={titles[index] || ""} // Use || '' to avoid uncontrolled input warning
                            onChange={(e) =>
                                handleTitleChange(index, e.target.value)
                            }
                            className="border-2 border-gray-500 p-2 bg-transparent focus:outline-none focus:border-gray-600 focus:bg-gray-900"
                        />
                        <input
                            type="text"
                            placeholder="Caption"
                            value={captions[index] || ""} // Use || '' to avoid uncontrolled input warning
                            onChange={(e) =>
                                handleCaptionChange(index, e.target.value)
                            }
                            className="border-2 border-gray-500 p-2 bg-transparent focus:outline-none focus:border-gray-600 focus:bg-gray-900"
                        />
                        {imagePreviews[index] && (
                            <button
                                type="button"
                                onClick={() => handleRemoveImage(index)}
                                className="mt-2 border-2 border-red-500 p-2 bg-red-900 focus:outline-none focus:border-red-600 focus:bg-red-500 text-white"
                            >
                                Remove Image
                            </button>
                        )}
                    </div>
                    </>
                ))}

                <button
                    type="button"
                    onClick={handleAddImage}
                    disabled={
                        images.length > 0 &&
                        images[images.length - 1].size === 0
                    }
                    className="border-2 border-gray-500 p-2 bg-transparent focus:outline-none focus:border-gray-600 focus:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Add Image
                </button>
                <button
                    type="submit"
                    className="bg-gray-500 hover:bg-gray-600 text-white p-2"
                >
                    Submit Project
                </button>
            </form>
        </div>
    );
};

export default ProjectForm;
