/**
 * Validates that a value is one of the allowed options
 * @param value - The value to validate
 * @param allowedValues - Array of allowed values
 * @param defaultValue - Default value to return if validation fails
 * @param propertyName - Name of the property being validated (for warnings)
 * @returns The validated value or default value
 */
export function validateEnum<T extends string>(
  value: T,
  allowedValues: readonly T[],
  defaultValue: T,
  propertyName: string,
): T {
  if (!allowedValues.includes(value)) {
    console.warn(
      `[LDS Components] Invalid value "${value}" for property "${propertyName}". ` +
        `Allowed values are: ${allowedValues.join(', ')}. Using default: "${defaultValue}"`,
    );
    return defaultValue;
  }
  return value;
}

/**
 * Validates that a string is not empty
 * @param value - The value to validate
 * @param propertyName - Name of the property being validated
 * @returns True if valid, false otherwise
 */
export function validateNonEmpty(value: string, propertyName: string): boolean {
  if (value.trim() === '') {
    console.warn(`[LDS Components] Property "${propertyName}" should not be empty`);
    return false;
  }
  return true;
}

/**
 * Validates that a number is within a range
 * @param value - The value to validate
 * @param min - Minimum allowed value
 * @param max - Maximum allowed value
 * @param propertyName - Name of the property being validated
 * @returns The clamped value
 */
export function validateRange(
  value: number,
  min: number,
  max: number,
  propertyName: string,
): number {
  if (value < min || value > max) {
    const clamped = Math.max(min, Math.min(max, value));
    console.warn(
      `[LDS Components] Property "${propertyName}" value ${value} is out of range [${min}, ${max}]. ` +
        `Clamping to ${clamped}`,
    );
    return clamped;
  }
  return value;
}
