module.exports = [
"[project]/.next-internal/server/app/admin/(dashboard)/properties/new/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/admin/(dashboard)/properties/location-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/admin/(dashboard)/properties/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/app/admin/(dashboard)/properties/image-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "4080eebc1c3f2d5a4aaffabe929f09ea152a8563e2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f28$dashboard$292f$properties$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["publishProperty"],
    "40ca2e8831948b592a67a4ed23ffc5b3179fbe0bf8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f28$dashboard$292f$properties$2f$location$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCitiesForCountry"],
    "600309ca49aa088130c278c582a39c5271ce0670f1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f28$dashboard$292f$properties$2f$image$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateImageRoomLabel"],
    "600a377115de8b87d50808970e990e8281bd49e4ab",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f28$dashboard$292f$properties$2f$image$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setCoverImage"],
    "60559bd3dbdfe85e579fb7df217a4f8c7a2f2b7946",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f28$dashboard$292f$properties$2f$image$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addPropertyImage"],
    "60a90b6b79593fc49bd352722910ceb542900dfb78",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f28$dashboard$292f$properties$2f$image$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removePropertyImage"],
    "60e94e5f42ed79c8a284318f82c307faffa7ed332d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f28$dashboard$292f$properties$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["savePropertyDraft"],
    "60f30eaf66b4ae1900d07db80d79e127cb748f4f50",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f28$dashboard$292f$properties$2f$image$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateImageAltText"],
    "703ee53c7dcfa192161315ad454872b85d572ed2f2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f28$dashboard$292f$properties$2f$image$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["moveImage"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f28$dashboard$292f$properties$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f28$dashboard$292f$properties$2f$location$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f28$dashboard$292f$properties$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f28$dashboard$292f$properties$2f$image$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/(dashboard)/properties/new/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/admin/(dashboard)/properties/location-actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/admin/(dashboard)/properties/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/app/admin/(dashboard)/properties/image-actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f28$dashboard$292f$properties$2f$location$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/(dashboard)/properties/location-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f28$dashboard$292f$properties$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/(dashboard)/properties/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f28$dashboard$292f$properties$2f$image$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/(dashboard)/properties/image-actions.ts [app-rsc] (ecmascript)");
}),
"[project]/.next-internal/server/app/admin/(dashboard)/properties/new/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/admin/(dashboard)/properties/location-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/admin/(dashboard)/properties/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/app/admin/(dashboard)/properties/image-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f28$dashboard$292f$properties$2f$location$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/(dashboard)/properties/location-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f28$dashboard$292f$properties$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/(dashboard)/properties/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f28$dashboard$292f$properties$2f$image$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/(dashboard)/properties/image-actions.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
}),
"[project]/src/app/admin/(dashboard)/properties/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4080eebc1c3f2d5a4aaffabe929f09ea152a8563e2":{"name":"publishProperty"},"40ff0613cc4cb0333a042179495f295044e669639d":{"name":"duplicateProperty"},"6014f55418cd743716a17f27f451030badd8c92224":{"name":"bulkChangeStatus"},"606e3c398acb1ccffeed3df80d870df5503edb7c15":{"name":"toggleFeatured"},"60acbfe7b4ff819d089a6df1c358079ac9a8b9e672":{"name":"changePropertyStatus"},"60e94e5f42ed79c8a284318f82c307faffa7ed332d":{"name":"savePropertyDraft"}},"src/app/admin/(dashboard)/properties/actions.ts",""] */ __turbopack_context__.s([
    "bulkChangeStatus",
    ()=>bulkChangeStatus,
    "changePropertyStatus",
    ()=>changePropertyStatus,
    "duplicateProperty",
    ()=>duplicateProperty,
    "publishProperty",
    ()=>publishProperty,
    "savePropertyDraft",
    ()=>savePropertyDraft,
    "toggleFeatured",
    ()=>toggleFeatured
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin-auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validations$2f$property$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/validations/property.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/taxonomy.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function savePropertyDraft(propertyId, rawValues) {
    const adminUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdminUser"])();
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validations$2f$property$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["propertyDraftSchema"].safeParse(rawValues);
    if (!parsed.success) {
        return {
            ok: false,
            errors: parsed.error.issues.map((issue)=>issue.message)
        };
    }
    const values = parsed.data;
    const data = {
        ...values.title !== undefined && {
            title: values.title
        },
        ...values.listingType !== undefined && {
            listingType: values.listingType
        },
        ...values.categoryId !== undefined && {
            category: {
                connect: {
                    id: values.categoryId
                }
            }
        },
        // Global mode is Country → City; the schema's required Locality is the
        // city's internal default (see ensureDefaultLocality) and is never user-facing.
        ...values.cityId !== undefined && {
            city: {
                connect: {
                    id: values.cityId
                }
            },
            locality: {
                connect: {
                    id: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureDefaultLocality"])(values.cityId)).id
                }
            },
            neighbourhood: {
                disconnect: true
            }
        },
        ...values.latitude !== undefined && {
            latitude: values.latitude
        },
        ...values.longitude !== undefined && {
            longitude: values.longitude
        },
        ...values.priceAmount !== undefined && {
            priceAmount: values.priceAmount
        },
        ...values.priceCurrency !== undefined && {
            priceCurrency: values.priceCurrency
        },
        ...values.rentPeriod !== undefined && {
            rentPeriod: values.rentPeriod
        },
        ...values.areaValue !== undefined && {
            areaValue: values.areaValue
        },
        ...values.areaUnit !== undefined && {
            areaUnit: values.areaUnit
        },
        ...values.bedrooms !== undefined && {
            bedrooms: values.bedrooms
        },
        ...values.bathrooms !== undefined && {
            bathrooms: values.bathrooms
        },
        ...values.floor !== undefined && {
            floor: values.floor
        },
        ...values.totalFloors !== undefined && {
            totalFloors: values.totalFloors
        },
        ...values.facing !== undefined && {
            facing: values.facing
        },
        ...values.furnishing !== undefined && {
            furnishing: values.furnishing
        },
        ...values.propertyAgeYears !== undefined && {
            propertyAgeYears: values.propertyAgeYears
        },
        ...values.constructionStatus !== undefined && {
            constructionStatus: values.constructionStatus
        },
        ...values.possessionDate !== undefined && {
            possessionDate: values.possessionDate ? new Date(values.possessionDate) : null
        },
        ...values.parkingSpaces !== undefined && {
            parkingSpaces: values.parkingSpaces
        },
        ...values.description !== undefined && {
            description: values.description
        },
        ...values.slug !== undefined && {
            slug: values.slug
        },
        ...values.metaTitle !== undefined && {
            metaTitle: values.metaTitle
        },
        ...values.metaDescription !== undefined && {
            metaDescription: values.metaDescription
        }
    };
    let id = propertyId;
    if (!id) {
        // `category`/`city` are required, non-nullable relations on Property — a
        // first save can't create a row without them, regardless of which wizard
        // step collected them last. Catch that here with a clear message instead
        // of letting Prisma throw a raw validation error.
        if (!values.categoryId || !values.cityId) {
            return {
                ok: false,
                errors: [
                    "Select a category, country, and city before saving this draft for the first time."
                ]
            };
        }
        const locality = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureDefaultLocality"])(values.cityId);
        // A brand-new draft needs the minimum fields a relation requires up front.
        const created = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].property.create({
            data: {
                title: values.title || "Untitled property",
                slug: values.slug || `untitled-${Date.now()}`,
                listingType: values.listingType ?? "SALE",
                priceAmount: values.priceAmount ?? 0,
                priceCurrency: values.priceCurrency ?? "USD",
                areaValue: values.areaValue ?? 0,
                areaUnit: values.areaUnit ?? "SQFT",
                description: values.description ?? "",
                status: "DRAFT",
                category: {
                    connect: {
                        id: values.categoryId
                    }
                },
                city: {
                    connect: {
                        id: values.cityId
                    }
                },
                locality: {
                    connect: {
                        id: locality.id
                    }
                }
            }
        });
        id = created.id;
    } else {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].property.update({
            where: {
                id
            },
            data
        });
    }
    if (values.amenityIds) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].propertyAmenity.deleteMany({
            where: {
                propertyId: id
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].propertyAmenity.createMany({
            data: values.amenityIds.map((amenityId)=>({
                    propertyId: id,
                    amenityId
                })),
            skipDuplicates: true
        });
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].auditLogEntry.create({
        data: {
            adminUserId: adminUser.id,
            propertyId: id,
            action: "draft_saved"
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/properties");
    return {
        ok: true,
        id
    };
}
const MIN_IMAGES_TO_PUBLISH = 5;
async function publishProperty(propertyId) {
    const adminUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdminUser"])();
    const property = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].property.findUniqueOrThrow({
        where: {
            id: propertyId
        },
        include: {
            images: true
        }
    });
    const errors = [];
    if (!property.images.some((image)=>image.isCover)) {
        errors.push("Choose a cover image before publishing.");
    }
    if (property.images.length < MIN_IMAGES_TO_PUBLISH) {
        errors.push(`Add at least ${MIN_IMAGES_TO_PUBLISH} photos before publishing.`);
    }
    if (property.images.some((image)=>!image.altText.trim())) {
        errors.push("Every photo needs alt text before publishing.");
    }
    if (!property.description.trim()) {
        errors.push("Add a description before publishing.");
    }
    if (errors.length > 0) {
        return {
            ok: false,
            errors
        };
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].property.update({
        where: {
            id: propertyId
        },
        data: {
            status: "PUBLISHED",
            publishedAt: new Date()
        }
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].auditLogEntry.create({
        data: {
            adminUserId: adminUser.id,
            propertyId,
            action: "published"
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/properties");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/properties/${property.slug}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LOCATIONS_CACHE_TAG"], {
        expire: 0
    });
    return {
        ok: true
    };
}
async function changePropertyStatus(propertyId, status) {
    const adminUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdminUser"])();
    const property = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].property.update({
        where: {
            id: propertyId
        },
        data: {
            status
        }
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].auditLogEntry.create({
        data: {
            adminUserId: adminUser.id,
            propertyId,
            action: "status_changed",
            detail: {
                status
            }
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/properties");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/properties/${property.slug}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LOCATIONS_CACHE_TAG"], {
        expire: 0
    });
}
async function toggleFeatured(propertyId, featured) {
    const adminUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdminUser"])();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].property.update({
        where: {
            id: propertyId
        },
        data: {
            featured
        }
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].auditLogEntry.create({
        data: {
            adminUserId: adminUser.id,
            propertyId,
            action: featured ? "featured" : "unfeatured"
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/properties");
}
async function bulkChangeStatus(propertyIds, status) {
    const adminUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdminUser"])();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].property.updateMany({
        where: {
            id: {
                in: propertyIds
            }
        },
        data: {
            status
        }
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].auditLogEntry.createMany({
        data: propertyIds.map((propertyId)=>({
                adminUserId: adminUser.id,
                propertyId,
                action: "status_changed",
                detail: {
                    status
                }
            }))
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/properties");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LOCATIONS_CACHE_TAG"], {
        expire: 0
    });
}
async function duplicateProperty(propertyId) {
    const adminUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdminUser"])();
    const source = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].property.findUniqueOrThrow({
        where: {
            id: propertyId
        },
        include: {
            amenities: true
        }
    });
    const copy = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].property.create({
        data: {
            title: `${source.title} (copy)`,
            slug: `${source.slug}-copy-${Date.now()}`,
            listingType: source.listingType,
            categoryId: source.categoryId,
            cityId: source.cityId,
            localityId: source.localityId,
            neighbourhoodId: source.neighbourhoodId,
            latitude: source.latitude,
            longitude: source.longitude,
            priceAmount: source.priceAmount,
            priceCurrency: source.priceCurrency,
            rentPeriod: source.rentPeriod,
            areaValue: source.areaValue,
            areaUnit: source.areaUnit,
            bedrooms: source.bedrooms,
            bathrooms: source.bathrooms,
            floor: source.floor,
            totalFloors: source.totalFloors,
            facing: source.facing,
            furnishing: source.furnishing,
            propertyAgeYears: source.propertyAgeYears,
            constructionStatus: source.constructionStatus,
            possessionDate: source.possessionDate,
            parkingSpaces: source.parkingSpaces,
            description: source.description,
            status: "DRAFT",
            amenities: {
                createMany: {
                    data: source.amenities.map((a)=>({
                            amenityId: a.amenityId
                        }))
                }
            }
        }
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].auditLogEntry.create({
        data: {
            adminUserId: adminUser.id,
            propertyId: copy.id,
            action: "duplicated",
            detail: {
                fromPropertyId: propertyId
            }
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/properties");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/admin/properties/${copy.id}`);
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    savePropertyDraft,
    publishProperty,
    changePropertyStatus,
    toggleFeatured,
    bulkChangeStatus,
    duplicateProperty
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(savePropertyDraft, "60e94e5f42ed79c8a284318f82c307faffa7ed332d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(publishProperty, "4080eebc1c3f2d5a4aaffabe929f09ea152a8563e2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(changePropertyStatus, "60acbfe7b4ff819d089a6df1c358079ac9a8b9e672", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(toggleFeatured, "606e3c398acb1ccffeed3df80d870df5503edb7c15", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(bulkChangeStatus, "6014f55418cd743716a17f27f451030badd8c92224", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(duplicateProperty, "40ff0613cc4cb0333a042179495f295044e669639d", null);
}),
"[project]/src/app/admin/(dashboard)/properties/image-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"600309ca49aa088130c278c582a39c5271ce0670f1":{"name":"updateImageRoomLabel"},"600a377115de8b87d50808970e990e8281bd49e4ab":{"name":"setCoverImage"},"60559bd3dbdfe85e579fb7df217a4f8c7a2f2b7946":{"name":"addPropertyImage"},"60a90b6b79593fc49bd352722910ceb542900dfb78":{"name":"removePropertyImage"},"60f30eaf66b4ae1900d07db80d79e127cb748f4f50":{"name":"updateImageAltText"},"703ee53c7dcfa192161315ad454872b85d572ed2f2":{"name":"moveImage"}},"src/app/admin/(dashboard)/properties/image-actions.ts",""] */ __turbopack_context__.s([
    "addPropertyImage",
    ()=>addPropertyImage,
    "moveImage",
    ()=>moveImage,
    "removePropertyImage",
    ()=>removePropertyImage,
    "setCoverImage",
    ()=>setCoverImage,
    "updateImageAltText",
    ()=>updateImageAltText,
    "updateImageRoomLabel",
    ()=>updateImageRoomLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin-auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function addPropertyImage(propertyId, url) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdminUser"])();
    // Only objects this property's own upload flow could have produced —
    // never an arbitrary external URL.
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["propertyImagePathFromUrl"])(url);
    if (!path || !path.startsWith(`${propertyId}/`)) {
        throw new Error("Image URL must be a property-images Storage URL for this property.");
    }
    const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].propertyImage.findMany({
        where: {
            propertyId
        },
        select: {
            position: true
        }
    });
    const nextPosition = existing.reduce((max, i)=>Math.max(max, i.position), -1) + 1;
    const image = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].propertyImage.create({
        data: {
            propertyId,
            url,
            altText: "",
            position: nextPosition,
            isCover: existing.length === 0
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/admin/properties/${propertyId}`);
    return image;
}
async function updateImageAltText(imageId, altText) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdminUser"])();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].propertyImage.update({
        where: {
            id: imageId
        },
        data: {
            altText
        }
    });
}
async function updateImageRoomLabel(imageId, roomLabel) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdminUser"])();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].propertyImage.update({
        where: {
            id: imageId
        },
        data: {
            roomLabel
        }
    });
}
async function setCoverImage(propertyId, imageId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdminUser"])();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].propertyImage.updateMany({
            where: {
                propertyId
            },
            data: {
                isCover: false
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].propertyImage.update({
            where: {
                id: imageId
            },
            data: {
                isCover: true
            }
        })
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/admin/properties/${propertyId}`);
}
async function moveImage(propertyId, imageId, direction) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdminUser"])();
    const images = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].propertyImage.findMany({
        where: {
            propertyId
        },
        orderBy: {
            position: "asc"
        }
    });
    const index = images.findIndex((image)=>image.id === imageId);
    const swapWith = direction === "up" ? index - 1 : index + 1;
    if (index === -1 || swapWith < 0 || swapWith >= images.length) return;
    const a = images[index];
    const b = images[swapWith];
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].propertyImage.update({
            where: {
                id: a.id
            },
            data: {
                position: b.position
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].propertyImage.update({
            where: {
                id: b.id
            },
            data: {
                position: a.position
            }
        })
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/admin/properties/${propertyId}`);
}
async function removePropertyImage(propertyId, imageId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdminUser"])();
    const removed = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].propertyImage.delete({
        where: {
            id: imageId
        }
    });
    // Best-effort: drop the Storage object too so removed photos don't pile up
    // as orphans. Placeholder (non-Storage) URLs have nothing to delete.
    const objectPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["propertyImagePathFromUrl"])(removed.url);
    if (objectPath) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.storage.from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PROPERTY_IMAGE_BUCKET"]).remove([
            objectPath
        ]);
        if (error || !data || data.length === 0) {
            console.error("property image removed from DB but Storage object was not deleted:", objectPath, error?.message);
        }
    }
    if (removed.isCover) {
        const next = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].propertyImage.findFirst({
            where: {
                propertyId
            },
            orderBy: {
                position: "asc"
            }
        });
        if (next) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].propertyImage.update({
                where: {
                    id: next.id
                },
                data: {
                    isCover: true
                }
            });
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/admin/properties/${propertyId}`);
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    addPropertyImage,
    updateImageAltText,
    updateImageRoomLabel,
    setCoverImage,
    moveImage,
    removePropertyImage
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addPropertyImage, "60559bd3dbdfe85e579fb7df217a4f8c7a2f2b7946", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateImageAltText, "60f30eaf66b4ae1900d07db80d79e127cb748f4f50", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateImageRoomLabel, "600309ca49aa088130c278c582a39c5271ce0670f1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(setCoverImage, "600a377115de8b87d50808970e990e8281bd49e4ab", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(moveImage, "703ee53c7dcfa192161315ad454872b85d572ed2f2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(removePropertyImage, "60a90b6b79593fc49bd352722910ceb542900dfb78", null);
}),
"[project]/src/app/admin/(dashboard)/properties/location-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40ca2e8831948b592a67a4ed23ffc5b3179fbe0bf8":{"name":"getCitiesForCountry"}},"src/app/admin/(dashboard)/properties/location-actions.ts",""] */ __turbopack_context__.s([
    "getCitiesForCountry",
    ()=>getCitiesForCountry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin-auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
const ID = /^[A-Za-z0-9_-]{1,64}$/;
async function getCitiesForCountry(countryId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdminUser"])();
    if (!ID.test(countryId)) return [];
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].city.findMany({
        where: {
            state: {
                countryId
            }
        },
        select: {
            id: true,
            name: true
        },
        orderBy: {
            name: "asc"
        }
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getCitiesForCountry
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCitiesForCountry, "40ca2e8831948b592a67a4ed23ffc5b3179fbe0bf8", null);
}),
"[project]/src/lib/storage.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALLOWED_IMAGE_TYPES",
    ()=>ALLOWED_IMAGE_TYPES,
    "MAX_PROPERTY_IMAGE_BYTES",
    ()=>MAX_PROPERTY_IMAGE_BYTES,
    "PROPERTY_IMAGE_BUCKET",
    ()=>PROPERTY_IMAGE_BUCKET,
    "buildPropertyImagePath",
    ()=>buildPropertyImagePath,
    "isRenderableImageUrl",
    ()=>isRenderableImageUrl,
    "isSupabaseStorageUrl",
    ()=>isSupabaseStorageUrl,
    "propertyImagePathFromUrl",
    ()=>propertyImagePathFromUrl
]);
const PROPERTY_IMAGE_BUCKET = "property-images";
const MAX_PROPERTY_IMAGE_BYTES = 10 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/avif"
];
const PUBLIC_PREFIX = "/storage/v1/object/public/";
function parse(url) {
    try {
        return new URL(url);
    } catch  {
        return null;
    }
}
function isSupabaseStorageUrl(url) {
    if (!url) return false;
    const u = parse(url);
    return !!u && u.protocol === "https:" && u.hostname.endsWith(".supabase.co") && u.pathname.startsWith(PUBLIC_PREFIX);
}
function isRenderableImageUrl(url) {
    if (isSupabaseStorageUrl(url)) return true;
    if (("TURBOPACK compile-time value", "development") === "production" || !url) return false;
    return parse(url)?.hostname === "picsum.photos";
}
function propertyImagePathFromUrl(url) {
    if (!isSupabaseStorageUrl(url)) return null;
    const marker = `${PUBLIC_PREFIX}${PROPERTY_IMAGE_BUCKET}/`;
    const pathname = new URL(url).pathname;
    return pathname.startsWith(marker) ? decodeURIComponent(pathname.slice(marker.length)) : null;
}
function buildPropertyImagePath(propertyId, file) {
    const fromName = file.name.split(".").pop()?.toLowerCase().replace(/[^a-z0-9]/g, "");
    const fromType = file.type.split("/")[1]?.replace("jpeg", "jpg");
    const ext = fromName && fromName.length <= 5 ? fromName : fromType ?? "jpg";
    return `${propertyId}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
}
}),
"[project]/src/lib/taxonomy.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LOCATIONS_CACHE_TAG",
    ()=>LOCATIONS_CACHE_TAG,
    "ensureDefaultLocality",
    ()=>ensureDefaultLocality,
    "ensureDefaultState",
    ()=>ensureDefaultState,
    "getAllCategories",
    ()=>getAllCategories,
    "getCitiesWithListings",
    ()=>getCitiesWithListings,
    "getCountriesWithListings",
    ()=>getCountriesWithListings,
    "getExploreCategories",
    ()=>getExploreCategories,
    "getExploreCities",
    ()=>getExploreCities
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
;
;
const LOCATIONS_CACHE_TAG = "locations";
const LOCATIONS_REVALIDATE_SECONDS = 300;
const getCitiesWithListings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async ()=>{
    const groups = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].property.groupBy({
        by: [
            "cityId"
        ],
        where: {
            status: "PUBLISHED"
        },
        _count: {
            _all: true
        }
    });
    if (groups.length === 0) return [];
    const cities = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].city.findMany({
        where: {
            id: {
                in: groups.map((g)=>g.cityId)
            }
        },
        select: {
            id: true,
            name: true,
            slug: true,
            imageUrl: true,
            state: {
                select: {
                    country: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            }
        }
    });
    const counts = new Map(groups.map((g)=>[
            g.cityId,
            g._count._all
        ]));
    return cities.map((c)=>({
            id: c.id,
            name: c.name,
            slug: c.slug,
            imageUrl: c.imageUrl,
            countryId: c.state.country.id,
            countryName: c.state.country.name,
            count: counts.get(c.id) ?? 0
        })).sort((a, b)=>b.count - a.count || a.name.localeCompare(b.name));
}, [
    "cities-with-listings"
], {
    revalidate: LOCATIONS_REVALIDATE_SECONDS,
    tags: [
        LOCATIONS_CACHE_TAG
    ]
});
const getCountriesWithListings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async ()=>{
    const cities = await getCitiesWithListings();
    if (cities.length === 0) return [];
    const countries = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].country.findMany({
        where: {
            id: {
                in: [
                    ...new Set(cities.map((c)=>c.countryId))
                ]
            }
        },
        select: {
            id: true,
            name: true,
            code: true
        }
    });
    return countries.map((country)=>{
        const countryCities = cities.filter((c)=>c.countryId === country.id);
        return {
            ...country,
            count: countryCities.reduce((sum, c)=>sum + c.count, 0),
            cities: countryCities
        };
    }).sort((a, b)=>b.count - a.count || a.name.localeCompare(b.name));
}, [
    "countries-with-listings"
], {
    revalidate: LOCATIONS_REVALIDATE_SECONDS,
    tags: [
        LOCATIONS_CACHE_TAG
    ]
});
async function getExploreCities(limit = 6) {
    const cities = await getCitiesWithListings();
    if (cities.length > 0) return cities.slice(0, limit);
    const fallback = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].city.findMany({
        take: limit,
        orderBy: {
            name: "asc"
        },
        select: {
            id: true,
            name: true,
            slug: true,
            imageUrl: true,
            state: {
                select: {
                    country: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            }
        }
    });
    return fallback.map((c)=>({
            id: c.id,
            name: c.name,
            slug: c.slug,
            imageUrl: c.imageUrl,
            countryId: c.state.country.id,
            countryName: c.state.country.name,
            count: 0
        }));
}
async function getExploreCategories(limit = 6) {
    const categories = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].category.findMany({
        take: limit,
        orderBy: {
            name: "asc"
        }
    });
    return categories.map((category)=>({
            id: category.id,
            name: category.name,
            slug: category.slug,
            imageUrl: category.imageUrl
        }));
}
async function getAllCategories() {
    const categories = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].category.findMany({
        orderBy: {
            name: "asc"
        }
    });
    return categories.map((c)=>({
            id: c.id,
            name: c.name,
            slug: c.slug
        }));
}
async function ensureDefaultState(countryId) {
    const country = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].country.findUniqueOrThrow({
        where: {
            id: countryId
        },
        select: {
            name: true
        }
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].stateProvince.upsert({
        where: {
            countryId_name: {
                countryId,
                name: country.name
            }
        },
        update: {},
        create: {
            countryId,
            name: country.name
        },
        select: {
            id: true
        }
    });
}
async function ensureDefaultLocality(cityId) {
    const city = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].city.findUniqueOrThrow({
        where: {
            id: cityId
        },
        select: {
            name: true
        }
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].locality.upsert({
        where: {
            cityId_slug: {
                cityId,
                slug: "default"
            }
        },
        update: {},
        create: {
            cityId,
            name: city.name,
            slug: "default"
        },
        select: {
            id: true
        }
    });
}
}),
"[project]/src/lib/validations/property.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "propertyDraftSchema",
    ()=>propertyDraftSchema,
    "propertyFormSchema",
    ()=>propertyFormSchema,
    "propertyStepFields",
    ()=>propertyStepFields,
    "slugify",
    ()=>slugify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
const propertyFormSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    // Basic Info
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, "Title is required"),
    listingType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "SALE",
        "RENT"
    ]),
    categoryId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Category is required"),
    // Location
    cityId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "City is required"),
    latitude: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().min(-90).max(90).optional(),
    longitude: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().min(-180).max(180).optional(),
    // Pricing
    priceAmount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().positive("Enter a price"),
    priceCurrency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().length(3, "Use a 3-letter currency code, e.g. USD"),
    rentPeriod: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "MONTHLY",
        "YEARLY"
    ]).optional(),
    // Specifications
    areaValue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().positive("Enter an area"),
    areaUnit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "SQFT",
        "SQM",
        "ACRE",
        "HECTARE",
        "MARLA",
        "KANAL"
    ]),
    bedrooms: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().min(0).optional(),
    bathrooms: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().min(0).optional(),
    floor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().optional(),
    totalFloors: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().optional(),
    facing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "NORTH",
        "SOUTH",
        "EAST",
        "WEST",
        "NORTH_EAST",
        "NORTH_WEST",
        "SOUTH_EAST",
        "SOUTH_WEST"
    ]).optional(),
    furnishing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "UNFURNISHED",
        "SEMI_FURNISHED",
        "FULLY_FURNISHED"
    ]).optional(),
    propertyAgeYears: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().min(0).optional(),
    constructionStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "UNDER_CONSTRUCTION",
        "READY_TO_MOVE"
    ]).optional(),
    possessionDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    parkingSpaces: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().min(0).optional(),
    // Amenities
    amenityIds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).default([]),
    // Description
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Add a description"),
    // SEO
    slug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Slug is required"),
    metaTitle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    metaDescription: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const propertyDraftSchema = propertyFormSchema.partial().extend({
    priceAmount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().min(0, "Price can't be negative").optional(),
    areaValue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().min(0, "Area can't be negative").optional(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const propertyStepFields = {
    basic: [
        "title",
        "listingType",
        "categoryId"
    ],
    location: [
        "cityId",
        "latitude",
        "longitude"
    ],
    pricing: [
        "priceAmount",
        "priceCurrency",
        "rentPeriod"
    ],
    specifications: [
        "areaValue",
        "areaUnit",
        "bedrooms",
        "bathrooms",
        "floor",
        "totalFloors",
        "facing",
        "furnishing",
        "propertyAgeYears",
        "constructionStatus",
        "possessionDate",
        "parkingSpaces"
    ],
    amenities: [
        "amenityIds"
    ],
    description: [
        "description"
    ],
    seo: [
        "slug",
        "metaTitle",
        "metaDescription"
    ]
};
function slugify(input) {
    return input.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}
}),
];

//# sourceMappingURL=_115zvjj._.js.map