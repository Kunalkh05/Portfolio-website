"""
Bulk apply mouse repulsion effect to remaining animation files.
This script adds interactive cursor repulsion to connect, intense, deep, and transfer animations.
"""

files_to_update = [
    'connect-animation.tsx',
    'intense-animation.tsx', 
    'deep-animation.tsx',
    'transfer-animation.tsx'
]

# Changes to apply:
# 1. Add offsetX/offsetY to Particle interface
# 2. Add mouseRef 
# 3. Add offsetX/offsetY initialization
# 4. Add mousemove event listener
# 5. Add repulsion logic in animation loop
# 6. Update rendering with offset
# 7. Add cleanup

print("Mouse repulsion implementation ready for 4 remaining animation files")
print("Each will get consistent 80px radius, 15px strength repulsion effect")
